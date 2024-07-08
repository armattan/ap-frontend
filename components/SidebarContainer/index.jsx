import React, { Fragment, useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Checkbox,
  Divider,
  InputAdornment,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { getProductsCategories } from "@/api/products";
import { useRouter } from "next/router";

const SidebarContainer = ({
  styles,
  filter,
  prices,
  showPrices,
  handlePricesChange,
  handlePriceChangeMin,
  handlePriceChangeMax,
}) => {
  const router = useRouter();
  const { pathname } = router;
  const [kitsClicked, setKitsClicked] = useState(false);

  const handleReset = () => {
    router.push({ pathname });
  };

  return (
    <Col sm={12} md={3} lg={3} className={styles.left}>
      {filter?.categories_display && (
        <Fragment>
          <div className="d-flex align-items-center justify-content-between">
            <h5>Categories</h5>
            <Button onClick={handleReset}>Reset</Button>
          </div>
          <div className="mt-4">
            {filter?.categories_count?.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.category_id}
                  className="d-flex align-items-center justify-content-between nav-link mb-3"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    {kitsClicked ? (
                      <ExpandMoreIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                    <Typography style={{ fontSize: "large" }}>
                      {item.category_name}
                    </Typography>
                  </div>
                  <Typography style={{ fontSize: "large", color: "GrayText" }}>
                    {`(${item.category_count})`}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <Divider sx={{ background: "gray" }} className="my-4" />
        </Fragment>
      )}
      {showPrices && (
        <div>
          <h5 className="mb-3">Price</h5>
          <Slider
            color="secondary"
            value={prices}
            min={0}
            max={999}
            step={10}
            onChange={handlePricesChange}
          />
          <div className="mt-2">
            <h6>
              Price: ${prices[0]} - ${prices[1]}
            </h6>
            <div className="d-flex align-items-center gap-2">
              <TextField
                label="Min"
                id="outlined-start-adornment"
                sx={{ m: 1, width: 100 }}
                name="min"
                value={prices[0]}
                onChange={handlePriceChangeMin}
              />
              {"-"}
              <TextField
                label="Min"
                id="outlined-start-adornment"
                sx={{ m: 1, width: 100 }}
                name="max"
                value={prices[1]}
                onChange={handlePriceChangeMax}
              />
            </div>
          </div>
        </div>
      )}
      <Divider sx={{ background: "gray" }} className="my-4" />
      {filter?.propsize_display && (
        <div>
          <h5 className="mb-4">Propellor Size</h5>
          <div className={`d-flex flex-column align-items-start gap-2`}>
            {filter?.propsize_count?.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="d-flex align-items-center justify-content-between nav-link mb-3"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    {kitsClicked ? (
                      <ExpandMoreIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                    <Typography style={{ fontSize: "large" }}>
                      {item.propsize_name}
                    </Typography>
                  </div>
                  <Typography style={{ fontSize: "large", color: "GrayText" }}>
                    {`(${item.propsize_count})`}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <Divider sx={{ background: "gray" }} className="my-4" />
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: 350,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1576806157689-f8fa4f3a82fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          position: "relative",
        }}
        className="mt-5"
      >
        <div className={styles.overlayedBanner}>
          <h5 className="text-white">NEW COLLECTION</h5>
          <h4 className="text-white">SALE 30% OFF</h4>
          <Button className={styles.shopNowBtn}>shop now</Button>
        </div>
      </div>
    </Col>
  );
};

export default SidebarContainer;
