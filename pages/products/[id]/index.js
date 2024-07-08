import { getProduct, getProducts, getProductsCategories } from "@/api/products";
import Breadcrumb from "@/components/Breadcrumb";
import React, { Fragment, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/ProductSingle.module.css";
import { Box, Divider, Rating, Tabs, Tab, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Review from "@/components/Review";
import Menubar from "@/components/Menubar";
import { getCategories } from "@/api/categories";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import { getHardwareCategories } from "@/api/hardwares";
import { getKitsCategories } from "@/api/kits";

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

const SingleProduct = ({ recentItems, product, error }) => {
  const [qty, setQty] = useState(1);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayRecentItems = () => {
    return recentItems?.items?.map((item) => {
      return (
        <Row key={item.id} className={`mb-3`}>
          <Col sm={12} md={4} lg={4}>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={item.thumbnail_image}
                style={{ width: "100%", height: "100%" }}
                alt={item.product_heading}
              />
            </div>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <h6 className="mb-2">{item.product_heading.substring(0, 30)}...</h6>
            <span
              style={{ color: "var(--secondary-color)", fontWeight: "bold" }}
            >
              ${item.deal_price}
            </span>
            <div>
              <Rating
                name="read-only"
                value={item?.rating}
                readOnly
                size="small"
              />
            </div>
          </Col>
        </Row>
      );
    });
  };

  return (
    <Fragment>
      <div>
        {/* breadcrumb */}
        <Breadcrumb title={"Product Details"} subtitle={"Product Details"} />

        <Container>
          {/* row start */}
          <Row className={`${styles.wrapper} mt-5 pt-5`}>
            {product ? (
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div className={`${styles.imageContainer}`}>
                      <img
                        src={product?.thumbnail_image}
                        alt={product?.product_heading}
                        className={`${styles.image}`}
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <h4>{product?.product_heading}</h4>
                    <div
                      className={`d-flex align-items-center justify-content-between mb-3`}
                    >
                      <span className={`${styles.price}`}>
                        ${product?.deal_price}
                      </span>
                      <div
                        className={`d-flex align-items-center justify-content-between gap-3`}
                      >
                        <Rating
                          name="read-only"
                          value={product.rating}
                          readOnly
                        />
                        {`(${product?.reviews?.length} reviews)`}
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col>Chamfered</Col>
                        <Col>{product?.chamfered}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Cut along weave</Col>
                        <Col>{product?.cut_along_weave}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Propeller size</Col>
                        <Col>
                          {product?.design_propeller_size
                            ? product?.design_propeller_size
                            : "None"}
                        </Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Thickness</Col>
                        <Col>{product?.thickness}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Metal</Col>
                        <Col>{product?.metal_name}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Category</Col>
                        <Col>{product?.category_name}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Color</Col>
                        <Col>{product?.color}</Col>
                      </Row>

                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Shop</Col>
                        <Col>{product?.shop_name}</Col>
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
                        <Tab
                          label={`Reviews ${product?.reviews?.length}`}
                          {...a11yProps(2)}
                        />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product?.product_details,
                        }}
                      />
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                      <h5>
                        {product?.reviews?.length} Review For{" "}
                        {product?.product_heading}
                      </h5>
                      <div className="mt-5">
                        {product?.reviews?.map((item) => {
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
    const productRes = await getProduct({ productId: ctx.query.id }).catch(
      (err) => {
        console.log({ err: err.response.data.detail });
        error = err.response.data.detail;
      }
    );
    const recentItemsRes = await getProducts({ size: 3, page: 1 });
    const categoriesRes = await getCategories({ size: 5 });
    const productsCategoriesRes = await getProductsCategories();
    const hardwaresCategoriesRes = await getHardwareCategories({ size: 20 });
    const kitsCatRes = await getKitsCategories();
    return {
      props: {
        product: productRes.data,
        recentItems: recentItemsRes.data,
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

export default SingleProduct;
