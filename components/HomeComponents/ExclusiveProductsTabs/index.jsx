import React, { useState } from "react";
import { Tabs, Tab, Typography, Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/ExclusiveProducts.module.css";

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const ExclusiveProductsTabs = ({ products }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const displayProducts = () => {
    return products?.items?.map((item, index) => {
      if (index < 3) {
        return (
          <Col sm={12} md={4} key={item.id}>
            <Paper elevation={3} className={`${styles.card}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  src={item.thumbnail_image}
                  alt={item.product_heading}
                  className={`${styles.image}`}
                />
              </div>
              <div className="mt-2 px-3 py-3">
                <div className={styles.title}>{item.product_heading}</div>
                <div className={styles.price}>${item.deal_price}</div>
              </div>
            </Paper>
          </Col>
        );
      }
    });
  };

  return (
    <Container
      className={`d-flex flex-column align-items-center justify-content-center`}
    >
      <div>
        <h3>Exclusive Products</h3>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center`}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="secondary"
        >
          <Tab label="New arrivals" {...a11yProps(0)} />
          <Tab label="Best Sellers" {...a11yProps(1)} />
          <Tab label="Featured" {...a11yProps(2)} />
          <Tab label="Special Offer" {...a11yProps(3)} />
        </Tabs>
        <Box
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Row>{displayProducts()}</Row>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </Container>
  );
};

export default ExclusiveProductsTabs;
