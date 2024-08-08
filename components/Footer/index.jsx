import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Footer = () => {
  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-center text-white`}
    >
      <Container>
        <Row className="text-center">
          <Col sm={12} md={4} lg={4}>
            <Link className="nav-link" href={"/terms"}>
              Terms
            </Link>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Link className="nav-link" href={"/copy-right"}>
              Content & Copyright
            </Link>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Link className="nav-link" href={"/privacy-policies"}>
              Privacy Policies
            </Link>
          </Col>
        </Row>
        <Divider sx={{ background: "#fff", width: "100%" }} className="my-5" />
        <div className="text-center">
          <div>© 2020 All Rights Reserved by Armattan Productions</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
