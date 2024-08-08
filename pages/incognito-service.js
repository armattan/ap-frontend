import Breadcrumb from "@/components/Breadcrumb";
import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const IncognitoService = () => {
  return (
    <div>
      <Breadcrumb title={"Incognito Service"} subtitle={"Incognito Service"} />
      <Container>
        <div className="my-5 ">
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Do you have a brilliant design for the next hit airframe, but don't
            know where to go next? Do you need a way to manufacture and package
            your products for retail, but don't want to pay an arm and a leg in
            overhead? If so, take a look at Armattan Productions' industry
            leading "Incognito Service."
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            AP's Incognito Service is more than a way to simply cut carbon fiber
            frames and source hardware. It's a way to put the manufacturing
            potential of one of the most trusted multirotor specialists behind
            your star ideas. Specifically, AP provides an avenue for designers
            and retailers to print stickers and packing labels, create Lipo
            straps, manufacture electronic components, and pack frames so
            they're ready-to-ship to individual customers. Whether you want to
            produce lipo pads or just cut some carbon, we can assist.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Beyond the logistics of preparing products for market, utilizing our
            Incognito Service gives you a quicker production turnaround, a
            variety of shipping options, and a direct line of communication with
            Armattan Productions to ensure everything is exactly how you
            envision. In short, the completeness of service offered has allowed
            a few major retailers to reduce overhead costs while increasing
            quality control and product presentation. Some public-knowledge
            examples of this are Armattan's collaborations with Dquad, RotorX
            and X-Labs : case-studies than can speak for themselves.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            From concept to design, testing to refinement, an enormous amount of
            time and dedication is needed to bring a product to market. What can
            be devastating is when unscrupulous corporations decide they can
            make a profit if they undercut prices, or especially if they beat a
            new product to market. Armattan intimately knows this struggle
            against those seedy players. For that reason alone, AP services come
            with a guarantee of confidentiality. The files you provide will stay
            protected and secret as long as you like; whether or not you prefer
            to utilize a non-disclosure agreement. Unless you say so, nobody
            will even know that Armattan Productions is involved. While this
            won't stem the tide of those who wish to reverse engineer your
            design, it certainly will help you beat them to market.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Armattan Productions can cut costs, increase quality, and revamp
            product presentation, all without leaking your hard work to external
            manufacturers. So whether you're curious and want to know more, or
            you have a design ready to cut ASAP, reach out! After all, if you
            don't ask, you can't know what Armattan Productions' Incognito
            Service can do for you.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default IncognitoService;
