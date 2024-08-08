import Breadcrumb from "@/components/Breadcrumb";
import Menubar from "@/components/Menubar";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import styles from "@/styles/ProductsPage.module.css";
import { getProducts, getProductsCategories } from "@/api/products";
import ProductCard from "@/components/ProductCard";
import { getCategories } from "@/api/categories";
import { useRouter } from "next/router";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import SidebarContainer from "@/components/SidebarContainer";
import { getKitsCategories } from "@/api/kits";
import { getHardwareCategories } from "@/api/hardwares";
import Loader from "@/components/Loader";
import CardProduct from "@/components/CardProduct";

const Products = ({ products, sort, filter, error }) => {
  const router = useRouter();
  const [prices, setPrices] = useState([
    filter?.price_range?.min_price,
    filter?.price_range?.max_price,
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Call the debounced function when the slider value changes
    if (loading) {
      handleDebouncedSliderChange(prices);
    }
  }, [prices]);

  const handlePriceChange = (event, newValue) => {
    setLoading(true);
    setPrices(newValue);
  };

  const handlePriceChangeMin = (e) => {
    setLoading(true);
    const minValue = e.target.value === "" ? 0 : parseInt(e.target.value);
    setPrices([minValue, prices[1]]);
  };
  const handlePriceChangeMax = (e) => {
    setLoading(true);
    const maxValue = e.target.value === "" ? 0 : parseInt(e.target.value);
    setPrices([prices[0], maxValue]);
  };

  console.log({ prices });

  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Function to handle debounced slider changes
  const handleDebouncedSliderChange = debounce((newValue) => {
    // Make your backend request here
    router.push({
      pathname: "/products",
      query: {
        sort,
        minprice: newValue[0],
        maxprice: newValue[1],
      },
    });
    setLoading(false);
  }, 3000); // Set the delay according to your needs

  const handlePagination = (event, value) => {
    router.push({
      pathname: "/products",
      query: { page: value, sort },
    });
  };

  const handleSortChange = (event, value) => {
    router.push({
      pathname: "/products",
      query: { sort: event.target.value },
    });
  };

  return (
    <Fragment>
      <Breadcrumb title={"Products"} subtitle={"Products"} />
      <Container className={`my-5`}>
        <Row className={styles.wrapper}>
          <SidebarContainer
            styles={styles}
            filter={filter}
            prices={prices}
            showPrices={filter?.price_display}
            handlePricesChange={handlePriceChange}
            handlePriceChangeMin={handlePriceChangeMin}
            handlePriceChangeMax={handlePriceChangeMax}
          />
          {products ? (
            <Col sm={12} md={9} lg={9} className={styles.right}>
              <div className="mb-4">
                <div>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="Sort"
                      onChange={handleSortChange}
                    >
                      <MenuItem value={"desc"}>Newest</MenuItem>
                      <MenuItem value={"asc"}>Oldest</MenuItem>
                      <MenuItem value={"rating"}>Highest Rating</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {!loading ? (
                <Row>
                  {products?.items?.map((item) => {
                    return (
                      <Col sm={12} md={4} lg={4} className="mb-4">
                        <CardProduct key={item.id} item={item} />
                      </Col>
                    );
                  })}
                </Row>
              ) : (
                <Loader />
              )}
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <Pagination
                  count={products.pages}
                  page={products.page}
                  onChange={handlePagination}
                  variant="outlined"
                  shape="rounded"
                />
              </div>
            </Col>
          ) : (
            <Col className="d-flex flex-column align-items-center">
              <Typography>{error}</Typography>
              <Button
                onClick={() => router.push({ pathname: "/products" })}
                variant="outlined"
                color="secondary"
              >
                Reset
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  let error;
  try {
    const { page, sort, category, minprice, maxprice, prop_size } = ctx.query;
    const productsRes = await getProducts({
      size: 20,
      page: page ? page : 1,
      sort: sort ? sort : "desc",
      category: category ? category : null,
      minprice: minprice ? minprice : null,
      maxprice: maxprice ? maxprice : null,
      propSize: prop_size ? prop_size : null,
    }).catch((err) => {
      error = err?.response.data.detail;
    });

    return {
      props: {
        products: productsRes.data,
        sort: sort ? sort : "desc",
        filter: productsRes?.data?.filter,
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

export default Products;
