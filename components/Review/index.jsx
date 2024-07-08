import { Avatar, Rating } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "react-moment";

const Review = ({ user_id, user_name, user_image, comment, rating, date }) => {
  return (
    <Row>
      <Col
        md={3}
        style={{
          width: 130,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={user_image}
          sx={{ width: 100, height: 100 }}
        />
      </Col>
      <Col md={9}>
        <div className={`d-flex align-items-center justify-content-between`}>
          <div>
            <h5 className="text-capitalize">{user_name}</h5>
            <Moment fromNow style={{ color: "var(--secondary-text-color)" }}>
              {date}
            </Moment>
          </div>
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <div
          style={{ color: "var(--secondary-text-color)" }}
          className={`mt-3`}
        >
          {comment}
        </div>
      </Col>
    </Row>
  );
};

export default Review;
