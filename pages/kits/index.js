import { getCategories } from "@/api/categories";
import { getHardwareCategories, getHardwares } from "@/api/hardwares";
import Breadcrumb from "@/components/Breadcrumb";
import Menubar from "@/components/Menubar";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cardStyles from "@/styles/Card.module.css";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Rating,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/styles/ProductsPage.module.css";
import { useRouter } from "next/router";
import SidebarContainer from "@/components/SidebarContainer";
import { getKits, getKitsCategories } from "@/api/kits";
import { getProductsCategories } from "@/api/products";
import TopNavbar from "@/components/HomeComponents/TopNavbar";
import Loader from "@/components/Loader";

const kits = ({ kits, sort, categoryId, filter, error }) => {
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
      pathname: `/kits`,
      query: {
        sort,
        minprice: newValue[0],
        maxprice: newValue[1],
      },
    });
    setLoading(false);
  }, 3000); // Set the

  const handlePagination = (event, value) => {
    router.push({
      pathname: `/kits`,
      query: { page: value, sort },
    });
  };

  const handleSortChange = (event, value) => {
    router.push({
      pathname: `/kits`,
      query: { sort: event.target.value },
    });
  };

  const displayPosts = () => {
    return kits?.items?.map((item) => {
      return (
        <Col key={item.id} sm={12} md={4} className={`mb-4`}>
          <Paper elevation={3} className={`${cardStyles.card}`}>
            <div className={`${cardStyles.imageContainer}`}>
              <img
                src={item.kit_image}
                alt={item.kit_name}
                className={`${cardStyles.image}`}
                style={{ objectFit: "cover" }}
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
            <div className="mt-2 px-3 py-3">
              <div className={cardStyles.title}>
                <Link href={`/kits/${item.id}`} className="nav-link">
                  {item.kit_name}
                </Link>
              </div>
              <div className={cardStyles.price}>${item.kit_deal_price}</div>
              <div className={`d-flex align-items-center mt-3 gap-3`}>
                <Rating name="read-only" value={item.rating} readOnly />
                {item.reviews && (
                  <span
                    className={cardStyles.reviewCounts}
                  >{`(${item.rating}) reviews`}</span>
                )}
              </div>
            </div>
          </Paper>
        </Col>
      );
    });
  };
  return (
    <div>
      <Breadcrumb title={"Kits"} subtitle={"Kits"} />

      <Container className={`my-5`}>
        <Row>
          <SidebarContainer
            styles={styles}
            filter={filter}
            prices={prices}
            showPrices={true}
            handlePricesChange={handlePriceChange}
            handlePriceChangeMin={handlePriceChangeMin}
            handlePriceChangeMax={handlePriceChangeMax}
          />
          {kits ? (
            <Col>
              <div>
                <div className="mb-4">
                  <div>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Sort
                      </InputLabel>
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

                {!loading ? <Row>{displayPosts()}</Row> : <Loader />}
              </div>

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
            </Col>
          ) : (
            <Col className="d-flex flex-column align-items-center">
              <Typography>{error}</Typography>
              <Button
                onClick={() => router.push({ pathname: "/kits" })}
                variant="outlined"
                color="secondary"
              >
                Reset
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { category, page, sort, minprice, maxprice, prop_size } = ctx.query;
  let error;
  try {
    const kitsRes = await getKits({
      category,
      size: 20,
      page: page ? page : 1,
      sort: sort ? sort : "desc",
      minprice: minprice ? minprice : null,
      maxprice: maxprice ? maxprice : null,
      propSize: prop_size ? prop_size : null,
    }).catch((err) => {
      error = err?.response?.data?.detail;
    });

    return {
      props: {
        kits: kitsRes.data,
        categoryId: category ? category : null,
        sort: sort ? sort : "desc",
        filter: kitsRes.data.filter,
      },
    };
  } catch (err) {
    return {
      props: {
        error,
        categoryId: category ? category : null,
      },
    };
  }
};

export default kits;
