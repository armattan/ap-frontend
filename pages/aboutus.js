import Breadcrumb from "@/components/Breadcrumb";
import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const Aboutus = () => {
  return (
    <div>
      <Breadcrumb title={"About us"} subtitle={"About us"} />
      <Container>
        <div className="my-5 ">
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            <strong>Welcome to Armattan Productions</strong>, a sister website
            of Armattan Quads, home of the only lifetime warrantied multirotor
            air frames.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            It took us a very long time to be able to benefit from manufacturing
            infrastructures in China. The challenges in sourcing quality
            manufacturing at a decent price can be quite daunting, and sometimes
            very disappointing. Minimum order quantities also pose a problem
            when it comes time to producing prototypes for hands-on testing.
            Likewise, getting good prices for mass production can also be
            challenging. Chinese factories really seek high volumes in order to
            reduce prices on parts production.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            A lot of people now have the resources, the creativity and the
            skills to produce fantastic designs for a multitude of applications.
            But they lack the access to manufacturing infrastructures that fall
            within an achievable investment, to see their ideas turned into
            reality. That’s where we come in.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            After years of working past such challenges, we built a relationship
            with several independent manufacturers who are now willing to really
            work with us.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Our speciality is multi-rotors, but our services do not end there.
            Just about anything that falls under our processing capabilities
            will be considered for production. It could be cars, household
            stuff, electronics, RC models, etc. Design it, and if we can make
            it, we will.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            At present, we offer CNC services for carbon fiber and Fr4, aka
            fiberglass or G10. New materials and manufacturing processes will be
            introduced as we move forward.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Armattan Quads is the only manufacturer in the world to offer
            lifetime warranty on all air frames. This is because the carbon
            fiber we use is of the highest quality. High-heat pressed 3k carbon
            fiber. The same carbon fiber will be cut for all the designs we
            produce through Armattan Productions. We don’t warranty third-party
            designs for obvious reasons, but we can certainly vouch for the
            carbon fiber quality.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            When it comes to designs, people often think their ideas are the
            next best thing, or a gold mine. It may be true, but it takes a lot
            of hard work, time and dedication to bring a design into a real
            product and to make it commercially available through a network of
            services. We can help with this, too!
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Armattan Productions is a new resource for designers and tinkerers
            alike. We are opening the door to high-end manufacturing
            infrastructures in a way that has never been done before. We can
            work with you from giving you pricing on your custom designs, to
            allowing you to sell and set your own profit margins. No minimum
            orders. No prototyping fees. No CNC programming fees. There is no
            fine print. Don’t look for it. Just low-cost, high-end, no holds
            barred parts production.
          </Typography>

          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            For more information about our services, please read our frequently
            asked questions.
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            For feedback and inquiries, please email:
            support@armattanproductions.com
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Now have fun designing and tinkering!
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Best,
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Chris and Natasha
          </Typography>
          <Typography
            component="p"
            style={{ textAlign: "justify" }}
            className="mb-3"
          >
            Armattan Productions
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Aboutus;
