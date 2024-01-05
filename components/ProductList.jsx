import Link from "next/link";
import React from "react";
import styles from "./ProductList.module.css";
import StarRating from "./StarRating";
import Image from "next/image";

export default function ProductList({ products = [] }) {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/products/${product.id}`}>
            <div className={styles.image}>
              <Image fill src={product.imgUrl} alt={product.name} />
            </div>
            <div className={styles.content}>
              <div className={styles.divider}>
                <span className={styles.name}>{product.name}</span>
                <div>
                  <span className={styles.originalPrice}>{product.price.toLocaleString()}원</span>
                  <span className={styles.prices}>{` ${product.salePrice.toLocaleString()}`}원</span>
                </div>
              </div>

              <div className={styles.divider}>
                <div className={styles.starRating}>
                  <StarRating value={product.starRating} />
                  <div>{product.starRatingCount.toLocaleString()}</div>
                </div>
                <p className={styles.likeCount}>{product.likeCount}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
