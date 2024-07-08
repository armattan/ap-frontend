import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, EffectCube } from "swiper/modules";

const Header = () => {
  const images = [
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/1430837021652370241.png",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/1430837004179234807.png",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/14308370461076297214.png",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/143083706447785277.png",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/14431921672126883503.png",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/1486038809550129718.jpg",
    },
    {
      url: "https://cdn.sortinghat.org/assets/images/banner-images/1646635703396836940.jpg",
    },
  ];

  const displayImages = () => {
    return images?.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(to right, rgba(255, 50, 77, 0.2), rgba(255, 50, 77, 0.2)), url(${item.url})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img
              src={item.url}
              width={"100%"}
              height={"100%"}
              className="img-fluid"
              style={{
                height: "100%",
              }}
            /> */}
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation={true}
        loop
        autoplay
        modules={[EffectCube, Navigation]}
        className="header__swiper"
      >
        {displayImages()}
      </Swiper>
    </div>
  );
};

export default Header;
