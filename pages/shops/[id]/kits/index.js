import {
  getShop,
  getShopKits,
  getShops,
  getShopsCategories,
} from "@/api/shops";
import Breadcrumb from "@/components/Breadcrumb";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/ShopSingle.module.css";
import {
  Box,
  Divider,
  Rating,
  Tabs,
  Tab,
  Typography,
  Button,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Review from "@/components/Review";
import Menubar from "@/components/Menubar";
import { getCategories } from "@/api/categories";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import { getHardwareCategories } from "@/api/hardwares";
import { getKitsCategories } from "@/api/kits";
import Link from "next/link";
import SidebarContainer from "@/components/SidebarContainer";
import { useRouter } from "next/router";
import CardProduct from "@/components/CardProduct";
import Loader from "@/components/Loader";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cardStyles from "@/styles/Card.module.css";

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

const SingleShop = ({ id, shop, kits, filter, sort, error }) => {
  console.log({ kits, error, filterPrice: filter });
  const [qty, setQty] = useState(1);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);
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
      pathname: `/shops/${id}/kits`,
      query: {
        sort,
        minprice: newValue[0],
        maxprice: newValue[1],
      },
    });
    setLoading(false);
  }, 3000); // Set the delay according to your needs

  const handlePagination = (event, value) => {
    console.log({ value });
    router.push({
      pathname: `/shops/${id}/kits`,
      query: { page: value, sort },
    });
  };

  const handleSortChange = (event, value) => {
    router.push({
      pathname: `/shops/${id}/kits`,
      query: { sort: event.target.value },
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayKits = () => {
    return kits?.items?.map((item) => {
      return (
        <Col key={item.id} sm={12} md={4} lg={4} className="mb-4">
          <Paper elevation={3} className={`${cardStyles.card}`}>
            <Link href={`/kits/${item.id}`} className="nav-link">
              <div className={`${cardStyles.imageContainer}`}>
                <img
                  src={item.kit_image}
                  alt={item.kit_name}
                  className={`${cardStyles.image}`}
                />
                <div className={`${cardStyles.tools}`}>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <AddShoppingCartIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <ShuffleIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <ZoomInIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <FavoriteBorderIcon className={`${cardStyles.icon}`} />
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-2 px-3 py-3">
              <div className={cardStyles.title}>
                <Link href={`/kits/${item.id}`} className="nav-link">
                  {item.kit_name.substring(0, 40)}...
                </Link>
              </div>
              <div className={cardStyles.price}>${item.deal_price}</div>

              <div className={`d-flex align-items-center mt-3 gap-3`}>
                <Rating name="read-only" value={item.rating} readOnly />
                {item.reviews && (
                  <span
                    className={cardStyles.reviewCounts}
                  >{`(${item?.reviews}) reviews`}</span>
                )}
              </div>
            </div>
          </Paper>
        </Col>
      );
    });
  };

  return (
    <Fragment>
      <div>
        {/* breadcrumb */}
        <Breadcrumb title={"Shop Details"} subtitle={"Shop Details"} />

        {/* shop details */}
        <Container className="my-5">
          {/* row start */}
          <Row>
            <SidebarContainer
              styles={styles}
              filter={filter}
              prices={prices}
              showPrices={filter?.price_display}
              handlePricesChange={handlePriceChange}
              handlePriceChangeMin={handlePriceChangeMin}
              handlePriceChangeMax={handlePriceChangeMax}
            />
            <Col sm={12} md={8} lg={8}>
              <div className="mb-4 d-flex align-items-center justify-content-between">
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
              <div
                className={`${styles.shopDetailsContainer} d-flex flex-column align-items-center justify-content-center px-4 mb-5`}
              >
                <div className={`${styles.imageContainer}`}>
                  <img
                    src={shop?.shop_image}
                    alt={shop?.shop_name}
                    className={`${styles.image}`}
                  />
                </div>
                <div className={`${styles.description}`}>
                  <Typography variant="h5">{shop?.shop_name}</Typography>
                  <div
                    dangerouslySetInnerHTML={{ __html: shop?.shop_details }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center gap-5 mb-3">
                <Link
                  className="nav-link fw-bold"
                  href={`/shops/${id}/products`}
                >
                  Products
                </Link>
                <Link
                  className="nav-link fw-bold"
                  style={{ color: "red" }}
                  href={`/shops/${id}/kits`}
                >
                  Kits
                </Link>
              </div>
              <Divider
                sx={{ background: "rgba(0,0,0,0.2)" }}
                className=" mb-4"
              />
              <div>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  Kits
                </Typography>
              </div>
              {!loading ? (
                <Row>
                  {displayKits()}
                  <div
                    className={`d-flex align-items-center justify-content-center`}
                  >
                    <Pagination
                      count={kits?.pages}
                      page={kits?.page}
                      onChange={handlePagination}
                      variant="outlined"
                      shape="rounded"
                    />
                  </div>
                </Row>
              ) : (
                <Loader />
              )}
              {error ? (
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <Typography variant="h5">{error}</Typography>
                  <Button
                    onClick={() =>
                      router.push({ pathname: `/shops/${id}/kits` })
                    }
                    variant="outlined"
                    color="secondary"
                  >
                    Reset
                  </Button>
                </div>
              ) : null}
            </Col>
            {/* <Col sm={12} md={4} lg={4}>
              <div
                className={`${styles.shopDetailsContainer} d-flex flex-column align-items-center justify-content-center px-4`}
              >
                <div className={`${styles.imageContainer}`}>
                  <img
                    src={shop?.shop_image}
                    alt={shop?.shop_name}
                    className={`${styles.image}`}
                  />
                </div>
                <div className={`${styles.description}`}>
                  <Typography variant="h5">{shop?.shop_name}</Typography>
                  <div
                    dangerouslySetInnerHTML={{ __html: shop?.shop_details }}
                  />
                </div>
              </div>
            </Col> */}
          </Row>
          {/* row end*/}
        </Container>
      </div>
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  let error, shopRes;
  const { page, sort, category, minprice, maxprice, prop_size, id } = ctx.query;
  console.log({ page });
  try {
    shopRes = await getShop({ shopId: id }).catch((err) => {
      console.log({ error: err.response.data.detail });
      error = err.response.data.detail;
    });
    const shopKitsRes = await getShopKits({
      shopId: ctx.query.id,
      page: page ? page : 1,
      size: 20,
      sort: sort ? sort : "desc",
      category: category ? category : null,
      minprice: minprice ? minprice : null,
      maxprice: maxprice ? maxprice : null,
      prop_size: prop_size ? prop_size : null,
    }).catch((err) => {
      console.log({ err: err.response.data.detail });
      error = err.response.data.detail;
    });
    return {
      props: {
        id,
        shop: shopRes.data,
        kits: shopKitsRes.data,
        sort: sort ? sort : "desc",
        filter: shopKitsRes?.data?.filter,
      },
    };
  } catch (err) {
    return {
      props: {
        error,
        id,
        shop: shopRes.data,
      },
    };
  }
};

export default SingleShop;
