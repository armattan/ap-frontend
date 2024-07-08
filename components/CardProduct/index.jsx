import React from "react";
import styles from "@/styles/Card.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Paper, Rating } from "@mui/material";
import Link from "next/link";

const CardProduct = ({ item }) => {
  return (
    <Paper elevation={3} className={`${styles.card}`}>
      <div className={`${styles.imageContainer}`}>
        <img
          src={item.thumbnail_image}
          alt={item.product_heading}
          className={`${styles.image}`}
        />
        <div className={`${styles.tools}`}>
          <div className={`${styles.iconWrapper}`}>
            <AddShoppingCartIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.iconWrapper}`}>
            <ShuffleIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.iconWrapper}`}>
            <ZoomInIcon className={`${styles.icon}`} />
          </div>
          <div className={`${styles.iconWrapper}`}>
            <FavoriteBorderIcon className={`${styles.icon}`} />
          </div>
        </div>
      </div>
      <div className="mt-2 px-3 py-3">
        <div className={styles.title}>
          <Link href={`/products/${item.id}`} className="nav-link">
            {item.product_heading}
          </Link>
        </div>
        <div className={styles.price}>${item.deal_price}</div>
        <div className={`d-flex align-items-center mt-3 gap-3`}>
          <Rating name="read-only" value={item.rating} readOnly />
          {item.reviews && (
            <span
              className={styles.reviewCounts}
            >{`(${item?.reviews?.length}) reviews`}</span>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default CardProduct;
