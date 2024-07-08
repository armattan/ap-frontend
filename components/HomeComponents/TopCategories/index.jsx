import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/TopCategories.module.css";

const TopCategories = ({ categories }) => {
  const displayCategories = () => {
    return categories?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <div
            className={`${styles.card} d-flex flex-column align-items-center justify-content-center`}
          >
            <div className={styles.imageContainer}>
              <img
                src={item.image_path}
                alt={item.name}
                className={`${styles.image}`}
              />
            </div>
            <div>
              <span className={styles.name}>{item.name}</span>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <Container
      data-aos="fade-up"
      className={`${styles.container} my-5 d-flex flex-column align-items-center justify-content-center`}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h3>Top Categories</h3>
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
      <div className="my-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className={"categories__swiper"}
        >
          {displayCategories()}
        </Swiper>
      </div>
    </Container>
  );
};

export default TopCategories;
