import React, { useEffect, useState } from "react";
import { Paper, Rating, Tabs, Tab, Typography, Box } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/FeaturedSection.module.css";
import { useTheme } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cardStyles from "@/styles/Card.module.css";
import Link from "next/link";
import SwiperComponentKits from "../SwiperComponentKits";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const FeaturedSectionKits = ({ kitsFeatured, kitsBestsellers, kitsDesc }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      data-aos="fade-up"
      className={`d-flex flex-column align-items-center justify-content-center my-5`}
      style={{ height: 600 }}
    >
      <div className="text-center w-50 mb-4">
        <h3>Kits</h3>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center gap-5 fw-bold`}
        style={{ marginBottom: -25 }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Featured " />
          <Tab label="Best Sellers" />
          <Tab label="Latest Arrival" />
        </Tabs>
      </div>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <SwiperComponentKits data={kitsFeatured?.items} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <SwiperComponentKits data={kitsBestsellers?.items} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <SwiperComponentKits data={kitsDesc?.items} />
      </TabPanel>
    </Container>
  );
};

export default FeaturedSectionKits;
