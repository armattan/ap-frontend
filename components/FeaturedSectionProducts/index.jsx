import React, { useEffect, useState } from "react";
import { Paper, Rating } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/FeaturedSection.module.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cardStyles from "@/styles/Card.module.css";
import Link from "next/link";
import SwiperComponentKits from "../SwiperComponentKits";
import SwiperComponentProducts from "../SwiperComponentProducts";
import axios from "axios";

const FeaturedSectionProducts = () => {
  const [products, setProducts] = useState(null);
  const [sort, setSort] = useState("bestsellers");

  console.log({ products });

  const fetchProducts = async () => {
    const res = await axios.get("/api/products", { params: { sort } });
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [sort]);

  const handleChangeSort = (item) => {
    setSort(item);
  };

  return (
    <Container
      data-aos="fade-up"
      className={`d-flex flex-column align-items-center justify-content-center mb-5`}
      style={{ height: 600 }}
    >
      <div className="text-center w-50 mb-4">
        <h3>Products</h3>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center gap-5 mb-1 fw-bold`}
      >
        <div
          style={{
            color: sort === "newarrival" ? "red" : "#000",
            cursor: "pointer",
          }}
        >
          New Arrival
        </div>
        <div
          onClick={() => handleChangeSort("bestsellers")}
          style={{
            color: sort === "bestsellers" ? "red" : "#000",
            cursor: "pointer",
          }}
        >
          Best sellers
        </div>
        <div
          onClick={() => handleChangeSort("featured")}
          style={{
            color: sort === "featured" ? "red" : "#000",
            cursor: "pointer",
          }}
        >
          Featured
        </div>
      </div>
      <div>
        <SwiperComponentProducts data={products?.items} />
      </div>
    </Container>
  );
};

export default FeaturedSectionProducts;
