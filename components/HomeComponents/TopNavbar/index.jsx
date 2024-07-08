import React, { Fragment, useEffect, useState } from "react";
import { Container, Dropdown, Form, NavDropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import styles from "@/styles/TopNavbar.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

const TopNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showKits, setShowKits] = useState(null);
  const [showProducts, setShowProducts] = useState(null);
  const [showHardwares, setShowHardwares] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [kitCategories, setkitCategories] = useState(null);
  const [hardwareCategories, setHardwareCategories] = useState(null);
  const [productsCategories, setProductsCategories] = useState(null);

  useEffect(() => {
    fetchKitsCategories();
    fetchHardwaresCategories();
    fetchProductsCategories();
  }, []);

  const fetchKitsCategories = async () => {
    try {
      const res = await axios.get("/api/kits/categories"); // Make request to the proxy API route
      setkitCategories(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchHardwaresCategories = async () => {
    try {
      const res = await axios.get("/api/hardwares/categories"); // Make request to the proxy API route
      setHardwareCategories(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchProductsCategories = async () => {
    try {
      const res = await axios.get("/api/products/categories"); // Make request to the proxy API route
      setProductsCategories(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Container
        style={{ height: 150 }}
        className={`d-flex align-items-center justify-content-around`}
      >
        <Link href={"/"}>
          <div
            style={{
              width: 300,
              height: 100,
            }}
            className={styles.logoContainer}
          >
            <img
              src="https://cdn.sortinghat.org/assets/images/logo-images/logo.png"
              alt="Armattan productions"
              className={styles.logo}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Link>
        <div className={styles.searchWrapper}>
          <div className={`d-flex align-items-center`}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              color="secondary"
              startIcon={<ExpandMoreIcon />}
              sx={{
                width: 200,
                fontSize: 10,
                height: 49,
                borderColor: "rgba(0,0,0,0.1)",
                color: "GrayText",
              }}
            >
              {!selectedItem ? "All categories" : selectedItem.name}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ width: 300 }}
            >
              <MenuItem onClick={() => setShowKits(true)}>
                <Accordion elevation={0} m={0} sx={{ width: "100%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Kits
                  </AccordionSummary>
                  <AccordionDetails className="d-flex align-items-start flex-column gap-2">
                    {kitCategories?.map((item) => {
                      return (
                        <div
                          onClick={() => handleSelectedItem(item)}
                          key={item.id}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => setShowProducts(true)}>
                <Accordion elevation={0} m={0} sx={{ width: "100%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Products
                  </AccordionSummary>
                  <AccordionDetails className="d-flex align-items-start flex-column gap-2">
                    {productsCategories?.map((item) => {
                      return (
                        <div
                          onClick={() => handleSelectedItem(item)}
                          key={item.id}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => setShowHardwares(true)}>
                <Accordion elevation={0} m={0} sx={{ width: "100%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    Hardware
                  </AccordionSummary>
                  <AccordionDetails className="d-flex align-items-start flex-column gap-2">
                    {hardwareCategories?.map((item) => {
                      return (
                        <div
                          onClick={() => handleSelectedItem(item)}
                          key={item.id}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </MenuItem>
            </Menu>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
            <button className={`${styles.searchBtn}`}>Search</button>
          </div>
        </div>
        <div
          className={`d-flex align-items-center justify-content-between gap-3`}
        >
          <div>
            <PersonOutlineIcon />
          </div>
          <div>
            <FavoriteBorderIcon />
          </div>
          <div
            className={`d-flex align-items-center justify-content-between gap-2`}
          >
            <ShoppingBasketIcon />
            <span style={{ fontWeight: "bold" }}>$159.99</span>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default TopNavbar;
