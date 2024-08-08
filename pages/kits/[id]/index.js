import { getProduct, getProducts, getProductsCategories } from "@/api/products";
import Breadcrumb from "@/components/Breadcrumb";
import React, { Fragment, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/ProductSingle.module.css";
import { Box, Divider, Rating, Tabs, Tab, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Review from "@/components/Review";
import Menubar from "@/components/Menubar";
import { getHardware, getHardwareCategories } from "@/api/hardwares";
import { getCategories } from "@/api/categories";
import Link from "next/link";
import { getKit, getKitsCategories } from "@/api/kits";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { Pagination } from "swiper/modules";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleKit = ({ kit, categories, error }) => {
  const [qty, setQty] = useState(1);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const targetRef = useRef(null);

  // Function to scroll to the target element
  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowReviews = (event, newValue) => {
    setValue(newValue);
    setTimeout(() => {
      scrollToElement();
    }, 500);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayCategories = () => {
    return categories?.map((item) => {
      return (
        <Link
          key={item.id}
          href={`/hardwares/categories/${item.id}`}
          className={`d-flex align-items-center justify-content-between mb-3 nav-link`}
        >
          <div>
            <KeyboardArrowRightIcon />
            <span style={{ fontSize: "large" }}>{item.name}</span>
          </div>
          <span>{"(9)"}</span>
        </Link>
      );
    });
  };

  const displayKitProducts = () => {
    return kit?.kit_product_list?.map((item) => {
      return (
        <Col key={item.id} sm={12} md={3} lg={3} className="mb-4">
          <Link href={item.link} className={`${styles.kitItem}`}>
            <div className={`${styles.kitItemImageContainer}`}>
              <img
                src={item.image}
                alt={item.name}
                className={`${styles.kitItemImage} img-fluid`}
              />
            </div>
            <div>
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </Link>
        </Col>
      );
    });
  };
  const displayKitHardwares = () => {
    return kit?.kit_hardware_list?.map((item) => {
      return (
        <Col key={item.id} sm={12} md={3} lg={3}>
          <Link href={item.link} className={`${styles.kitItem}`}>
            <div className={`${styles.kitItemImageContainer}`}>
              <img
                src={item.image}
                alt={item.name}
                className={`${styles.kitItemImage} img-fluid`}
              />
            </div>
            <div>
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </Link>
        </Col>
      );
    });
  };

  return (
    <Fragment>
      <div>
        {/* breadcrumb */}
        <Breadcrumb title={"Kit Details"} subtitle={"Kit Details"} />

        <Container>
          {/* row start */}
          <Row className={`${styles.wrapper} mt-5 pt-5`}>
            {kit ? (
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div className={`${styles.imageContainer}`}>
                      <img
                        src={kit.kit_image}
                        alt={kit.name}
                        className={`${styles.image}`}
                        style={{
                          objectFit: "fill",
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <h4>{kit.kit_name}</h4>
                    <div
                      className={`d-flex align-items-center justify-content-between mb-3`}
                    >
                      <span className={`${styles.price}`}>
                        ${kit.kit_deal_price}
                      </span>
                      <div
                        className={`d-flex align-items-center justify-content-between gap-3`}
                        style={{ cursor: "pointer" }}
                        onClick={(e) => handleShowReviews(e, 2)}
                      >
                        <Rating name="read-only" value={kit.rating} readOnly />
                        {`(${kit?.reviews?.length} reviews)`}
                      </div>
                    </div>
                    <div>
                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Category</Col>
                        <Col>{kit.kit_category_name}</Col>
                      </Row>
                    </div>
                    <Divider sx={{ background: "gray" }} className="my-4" />
                    <div>
                      <Row className="mt-2">
                        <Col>Shop name</Col>
                        <Col>
                          <Link
                            className="nav-link text-capitalize"
                            href={`/shops/${kit?.kit_shop_id}/products`}
                          >
                            {kit.kit_shop_name}
                            <RemoveRedEyeIcon className="ms-2" />
                          </Link>
                        </Col>
                      </Row>
                    </div>
                    <Divider sx={{ background: "gray" }} className="my-4" />
                    <div className={`d-flex align-items-center gap-3`}>
                      <div
                        className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
                      >
                        <RemoveIcon className={styles.icon} />
                      </div>
                      <div
                        className={`${styles.qty} d-flex align-items-center justify-content-center`}
                      >
                        {qty}
                      </div>
                      <div
                        className={`${styles.iconWrapper} d-flex align-items-center justify-content-center`}
                      >
                        <AddIcon className={styles.icon} />
                      </div>
                    </div>
                    <div
                      className={`${styles.cartBtn} d-flex align-items-center justify-content-center gap-2 mt-4`}
                    >
                      <span>
                        <AddShoppingCartIcon className={styles.cartIcon} />
                      </span>
                      <span className={styles.btnText}>Add to cart</span>
                    </div>
                  </Col>

                  <Col sm={12} md={12} lg={12} className="my-5">
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Items list" {...a11yProps(1)} />
                        <Tab label={`Reviews`} {...a11yProps(2)} />
                      </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                      {kit.details ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: kit.details,
                          }}
                        />
                      ) : (
                        <Typography>
                          There is no description for this kit
                        </Typography>
                      )}
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <div>
                        <Typography
                          className="mb-3"
                          sx={{ fontWeight: "bold" }}
                        >
                          Products List
                        </Typography>
                        <Row>{displayKitProducts()}</Row>
                      </div>
                      <Typography className="mb-3" sx={{ fontWeight: "bold" }}>
                        Hardwares List
                      </Typography>
                      <Row>{displayKitHardwares()}</Row>
                      {/* {kit?.kit_product_list?.length ? (
                        <div>
                          <h6>Items related to {kit.kit_name}</h6>
                          <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Pagination]}
                            className="kit_swiper"
                          >
                            {displayKitProducts()}
                          </Swiper>
                        </div>
                      ) : (
                        <Typography>
                          There is no description for this kit
                        </Typography>
                      )} */}
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <h5 ref={targetRef}>
                        {kit?.reviews?.length} Review For {kit.name}
                      </h5>
                      <div className="mt-5">
                        {kit?.reviews?.map((item) => {
                          return (
                            <div key={item.user_id}>
                              <Review {...item} />
                              <Divider
                                sx={{ background: "gray" }}
                                className="my-4"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        <h5 className="mb-2">Add a review</h5>
                        <Rating
                          name="simple-controlled"
                          value={rating}
                          onChange={(event, newValue) => {
                            setRating(newValue);
                          }}
                        />
                        <Form className="mt-3">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control
                              as="textarea"
                              rows={4}
                              placeholder="Your review"
                            />
                          </Form.Group>
                          <Row>
                            <Col sm={12} md={6} lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control
                                  size="lg"
                                  type="email"
                                  placeholder="Enter name *"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Control
                                  size="lg"
                                  type="email"
                                  placeholder="Enter email *"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            className={`${styles.cartBtn} btn btn-lg d-flex align-items-center justify-content-center gap-2 mt-4`}
                          >
                            <span className={styles.btnText}>
                              Submit Review
                            </span>
                          </Button>
                        </Form>
                      </div>
                    </CustomTabPanel>
                  </Col>
                </Row>
              </Col>
            ) : (
              <Col>
                <Typography>{error}</Typography>
              </Col>
            )}
          </Row>

          {/* row end*/}
        </Container>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  let error;
  try {
    const kitRes = await getKit({ postId: ctx.query.id }).catch((err) => {
      error = err.response.data.detail;
    });
    const categoriesRes = await getCategories({ size: 5 });
    const kitsCatRes = await getKitsCategories();
    const productsCategoriesRes = await getProductsCategories();
    const hardwaresCategoriesRes = await getHardwareCategories({ size: 20 });
    return {
      props: {
        kit: kitRes.data,
        categories: categoriesRes.data,
        kitsCategories: kitsCatRes.data,
        productsCategories: productsCategoriesRes.data,
        hardwaresCategories: hardwaresCategoriesRes.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error,
      },
    };
  }
};

export default SingleKit;
