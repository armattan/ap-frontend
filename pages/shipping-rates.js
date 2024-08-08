import { getShipping } from "@/api/shipping";
import Breadcrumb from "@/components/Breadcrumb";
import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const ShippingRates = ({ rates }) => {
  // const [rates, setRates] = useState(null);
  // const fetchShipping = async () => {
  //   const res = await axios.get("/api/shipping");
  //   setRates(res.data);
  // };
  // useEffect(() => {
  //   fetchShipping().catch((err) => {
  //     console.log({ err });
  //   });
  // }, []);
  return (
    <div>
      <Breadcrumb title={"Shipping Rates"} subtitle={"Shipping Rates"} />
      <Container className="my-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {rates?.map((item) => {
              return (
                <tr>
                  <td>{item.amount_from}</td>
                  <td>{item.amount_to}</td>
                  <td>{item.rate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="mb-3 mt-5">
          <Typography
            component={"p"}
            className="fw-bold"
            sx={{ color: "GrayText" }}
          >
            *Please note that orders over $400 will be charged the actual price
            of shipping via speed shipping.
          </Typography>
        </div>
        <div className="mb-3">
          <Typography
            component={"p"}
            className="fw-bold"
            sx={{ color: "GrayText" }}
          >
            **You will be required to pay applicable customs fees to the carrier
            upon reciept.
          </Typography>
        </div>
        <div className="mb-3">
          <Typography component={"p"} className="fw-bold" sx={{ color: "red" }}>
            *** IMPORTANT NOTE
          </Typography>
        </div>
        <div className="mb-3">
          <Typography
            component={"p"}
            className="fw-bold"
            sx={{ color: "GrayText" }}
          >
            <span style={{ color: "red" }}>*</span>Due to delays and
            restrictions of shipments to Brazil, Israel, Italy, Russia, Serbia,
            South Africa, Spain and Ukraine, we can no longer offer the regular
            rate shipping. Flat rate shipping to these countries is set at 28$.
            This is for speed shipping which takes on average 3-9 days. We
            apologize for any inconvenience this may cause.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  let error;
  try {
    const res = await getShipping().catch((err) => {
      console.log({ err: err.response.data });
      error = err.response.data;
    });
    return {
      props: {
        rates: res.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: "",
      },
    };
  }
};

export default ShippingRates;
