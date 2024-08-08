import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Menubar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { ClickAwayListener } from "@mui/base";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { getKitsCategories } from "@/api/kits";
import { useDispatch, useSelector } from "react-redux";
import { categoriesFetch } from "@/store/categoriesSlice";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dropdown } from "react-bootstrap";

const Menubar = ({}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showKits, setShowKits] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showHardwares, setShowHardwares] = useState(false);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNav = (name, categoryId) => {
    if (name === "kits") {
      router.push({
        pathname: `/kits`,
        query: {
          category: categoryId,
        },
      });
    } else if (name === "hardwares") {
      router.push({
        pathname: `/hardwares`,
        query: {
          category: categoryId,
        },
      });
    } else if (name === "products") {
      router.push({
        pathname: `/products`,
        query: {
          category: categoryId,
        },
      });
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{
        backgroundColor: "#fff !important",
      }}
    >
      <Container>
        <Button
          onClick={handleClick}
          id="hardware-button"
          aria-controls={open ? "hardware-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className={styles.brandContainer}
        >
          <Box
            className={`${styles.brandBox} d-flex align-items-center justify-content-between`}
          >
            <span>Shopping Categories</span>
            <MenuIcon className={`${styles.brandIcon}`} />
          </Box>
        </Button>
        <Menu
          id="hardware-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "hardware-button",
          }}
          sx={{ width: 350 }}
        >
          <MenuItem>
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
                      key={item.id}
                      onClick={() => handleNav("kits", item.id)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </MenuItem>
          <Divider />
          <MenuItem>
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
                      key={item.id}
                      onClick={() => handleNav("products", item.id)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </MenuItem>
          <Divider />
          <MenuItem>
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
                      key={item.id}
                      onClick={() => handleNav("hardwares", item.id)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </MenuItem>
        </Menu>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link style={{ fontWeight: "bold" }} as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bold" }} as={Link} href="/kits">
              Kits
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bold" }} as={Link} href="/products">
              Products
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: "bold" }}
              as={Link}
              href="/hardwares"
            >
              Hardwares
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--bs-nav-link-color)",
                  fontWeight: "bold",
                }}
              >
                Support
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/aboutus" as={Link}>
                  About us
                </Dropdown.Item>
                <Dropdown.Item href="/shipping-information">
                  Shipping Information
                </Dropdown.Item>
                <Dropdown.Item href="/shipping-rates">
                  Shipping Rates
                </Dropdown.Item>
                <Dropdown.Item href="/incognito-service">
                  Incognito Service
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              style={{ fontWeight: "bold" }}
              as={Link}
              href="/contact-us"
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
