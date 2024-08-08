import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import { Paper, Rating } from "@mui/material";
import Link from "next/link";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cardStyles from "@/styles/KitSwiperCard.module.css";
import { Container } from "react-bootstrap";

const SwiperComponentProducts = ({ data }) => {
  const displayData = () => {
    return data?.map((item) => {
      return (
        <SwiperSlide key={item.id} style={{ width: "20rem" }}>
          <Paper elevation={3} className={`${cardStyles.card}`}>
            <Link href={`/products/${item.id}`} className="nav-link">
              <div className={`${cardStyles.imageContainer}`}>
                <img
                  src={item.thumbnail_image}
                  alt={item.product_heading}
                  className={`${cardStyles.image}`}
                />
                <div className={`${cardStyles.tools}`}>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <AddShoppingCartIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <ShuffleIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <ZoomInIcon className={`${cardStyles.icon}`} />
                  </div>
                  <div className={`${cardStyles.iconWrapper}`}>
                    <FavoriteBorderIcon className={`${cardStyles.icon}`} />
                  </div>
                </div>
              </div>
            </Link>
            <div className="mt-2 px-3 py-3 text-start">
              <div className={cardStyles.title}>
                <Link href={`/products/${item.id}`} className="nav-link">
                  {item.product_heading.substring(0, 20)}...
                </Link>
              </div>
              <div className={cardStyles.price}>${item.deal_price}</div>

              <div className={`d-flex align-items-center mt-3 gap-3`}>
                <Rating name="read-only" value={item.rating} readOnly />
                {item.reviews && (
                  <span
                    className={cardStyles.reviewCounts}
                  >{`(${item?.reviews}) reviews`}</span>
                )}
              </div>
            </div>
          </Paper>
        </SwiperSlide>
      );
    });
  };
  return (
    <Container>
      <Swiper
        loop
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="kits__section__swiper"
      >
        {displayData()}
      </Swiper>
    </Container>
  );
};
export default SwiperComponentProducts;
