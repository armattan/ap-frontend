import React from "react";
import { Paper, Rating } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/FeaturedSection.module.css";
import CardProduct from "@/components/CardProduct";

const FeaturedSection = ({ products }) => {
  const displayProducts = () => {
    return products?.items?.map((item, index) => {
      if (index < 4) {
        return (
          <Col sm={12} md={3} key={item.id} className={`mb-5`}>
            <CardProduct item={item} />
          </Col>
        );
      }
    });
  };

  return (
    <Container
      data-aos="fade-up"
      className={`d-flex flex-column align-items-center justify-content-center my-5`}
    >
      <div className="text-center w-50 mb-4">
        <h3>Featured Section</h3>
        <h5
          style={{
            color: "var(--secondary-text-color)",
            lineHeight: "28px",
            fontWeight: "lighter",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim Nullam nunc varius.
        </h5>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center`}
      >
        <Row>{displayProducts()}</Row>
      </div>
    </Container>
  );
};

export default FeaturedSection;
