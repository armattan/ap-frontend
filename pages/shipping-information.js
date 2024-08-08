import Breadcrumb from "@/components/Breadcrumb";
import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import imageShipping from "@/public/shipping_information.png";

const ShippingInformation = () => {
  return (
    <div>
      <Breadcrumb
        title={"Shipping Information"}
        subtitle={"Shipping Information"}
      />
      <Container>
        <div className="my-5 ">
          <ol>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              Armattan Productions has no restrictions when it comes to
              shipping. We ship world-wide. As long as you have a shipping
              address linked to your payment, we will ship. We do not ship to
              addresses that are not linked to your PayPal. So make sure you
              have the correct address tied with your payment. We will not
              accept requests to ship to alternate shipping addresses.
            </Typography>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              If you place a second order and want to add it to your first
              order, understand that your order will be delayed and Armattan
              Productions reserves the right to not refund the cost of shipping.
              We are unable to combine Armattan Quads orders with Armattan
              Productions orders for shipping.
            </Typography>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              You will be notified via email when your order is shipped. If your
              email security settings are on high, this automated notice may end
              up in your spam box. Please check your spam box before you contact
              us. Please read the automated email as it contains your tracking
              number.
            </Typography>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              A signature is required to accept your package. If your package is
              late, please contact your local post office/ courier first, to see
              if it is being held there or possibly held by customs for
              inspection. We are not responsible for customs fees.
            </Typography>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              The tracking system for the worldwide shipping does not always
              work very well. It may take a while before the tracking status is
              updated. Sometimes, it is not updated until after the items are
              received. But the shipping method itself is highly reliable. The
              tracking number may or may not be traceable through your own
              country's postal service. You can try this tracking page:
              http://www.17track.net/en/track? or this one:
              https://parcelsapp.com/en Please allow 48-72 hours for your
              tracking information to be updated.
            </Typography>
            <div>
              <img
                crossOrigin="anonymous"
                src={"/shipping_information.png"}
                alt={"shipping information"}
                className="img-fluid my-4"
              />
            </div>
            <Typography
              component="li"
              style={{ textAlign: "justify" }}
              className="mb-3"
            >
              For international orders, shipping time usually takes between 7
              and 14 business days. This is not always the case, however. Delays
              do occur, especially during national holidays. Armattan
              Productions is not responsible for any postal delays. If you do
              not have your order within 20 business days of shipping, you may
              contact us. But please check with your local post office first.
              They may be holding it due to failed delivery attempt, or it may
              be held by customs.
            </Typography>
          </ol>
          <div className="mt-5">
            <Typography
              style={{ textAlign: "justify", color: "red" }}
              className="mb-3"
            >
              *IMPORTANT NOTICE* March 25, 2020
            </Typography>
            <Typography style={{ textAlign: "justify" }} className="mb-3">
              Unfortunately due to rapid changes in shipping as a result of
              recent events in the world, shipping to some countries has been
              temporarily suspended by the national postal service. Some
              countries are refusing shipments using the standard shipping
              method. And the list of countries changes daily. Those countries
              accepting standard shipping are experiencing delays. Currently we
              can still offer the express shipping option to some of these
              countries. However, there will be a cost in addition to what is
              paid at checkout. If you are interested in taking advantage of
              this option, we can send you a payment link. The other option is
              to simply wait until the postal services in your country resume.
              We do apologize for any inconvenience and appreciate your
              understanding at this unpredictable time.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShippingInformation;
