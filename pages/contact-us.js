import Breadcrumb from "@/components/Breadcrumb";
import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <Breadcrumb title={"Contact us"} subtitle={"Contact us"} />
      <Container>
        <div className="my-5 ">
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            To contact Armattan Productions, please send an email to
            support@armattanproductions.com
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
