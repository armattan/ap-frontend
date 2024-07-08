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
import { getHardware, getHardwareCategories } from "@/api/hardwares";
import { getCategories } from "@/api/categories";
import Link from "next/link";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import { getKitsCategories } from "@/api/kits";
import SidebarContainer from "@/components/SidebarContainer";

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

const SingleHardware = ({ hardware, categories, error }) => {
  const [qty, setQty] = useState(1);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <div>
        {/* breadcrumb */}
        <Breadcrumb title={"Hardware Details"} subtitle={"Hardware Details"} />

        <Container>
          {/* row start */}
          <Row className={`${styles.wrapper} mt-5 pt-5`}>
            {hardware ? (
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={12} md={6} lg={6}>
                    <div className={`${styles.imageContainer}`}>
                      <img
                        src={hardware.image}
                        alt={hardware.name}
                        className={`${styles.image}`}
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <h4>{hardware.name}</h4>
                    <div
                      className={`d-flex align-items-center justify-content-between mb-3`}
                    >
                      <span className={`${styles.price}`}>
                        ${hardware.price}
                      </span>
                    </div>
                    <div>
                      <Divider sx={{ background: "gray" }} className="mt-3" />
                      <Row className="mt-2">
                        <Col>Category</Col>
                        <Col>{hardware.category_name}</Col>
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
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                      {hardware.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: hardware.description,
                          }}
                        />
                      ) : (
                        <Typography>
                          There is no description for this hardware
                        </Typography>
                      )}
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
    const hardwareRes = await getHardware({ postId: ctx.query.id }).catch(
      (err) => {
        error = err.response.data.detail;
      }
    );
    const categoriesRes = await getCategories({ size: 5 });
    const kitsCatRes = await getKitsCategories();
    const productsCategoriesRes = await getProductsCategories();
    const hardwaresCategoriesRes = await getHardwareCategories({ size: 20 });

    return {
      props: {
        hardware: hardwareRes.data,
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

export default SingleHardware;
