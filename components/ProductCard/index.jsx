import React, { useState } from "react";
import styles from "@/styles/ProductCard.module.css";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product }) => {
  const [colors, setColors] = useState(["#87554B", "#333333", "#DA323F"]);
  return (
    <div className={`${styles.container} mb-5`}>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div className={styles.imageContainer}>
            <img
              src={product.thumbnail_image}
              className={styles.image}
              alt={product.product_heading}
            />
          </div>
        </Col>
        <Col sm={12} md={8} className={`py-3 px-5`}>
          <h5>
            <Link className="nav-link" href={`/products/${product.id}`}>
              {product.product_heading}
            </Link>
          </h5>
          <div
            className={`d-flex align-items-center justify-content-between my-3`}
          >
            <span className={styles.price}>${product.deal_price}</span>
            <div className={`d-flex align-items-center gap-2`}>
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                size="small"
              />
              <span
                className={styles.ratingCounts}
              >{`(${product.rating})`}</span>
            </div>
          </div>
          <div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </div>
            <div>
              <div
                className={`${styles.cartBtn} d-flex align-items-center justify-content-center gap-2 mt-4`}
              >
                <span>
                  <AddShoppingCartIcon className={styles.cartIcon} />
                </span>
                <span className={styles.btnText}>Add to cart</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
