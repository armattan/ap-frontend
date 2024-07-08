import React from "react";
import styles from "@/styles/Breadcrumb.module.css";
import { Col, Container, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Breadcrumb = ({ title, subtitle }) => {
  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-center`}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h2>{title}</h2>
          </Col>
          <Col
            md={6}
            className={`d-flex align-items-center justify-content-center`}
          >
            Home{" "}
            <KeyboardArrowRightIcon
              style={{
                fontSize: "22px",
                fontWeight: "100",
              }}
            />{" "}
            {subtitle}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumb;
