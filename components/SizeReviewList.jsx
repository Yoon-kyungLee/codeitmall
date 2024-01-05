import React from "react";
import formatDate from "@/lib/formatDate";
import { labels } from "@/constants/labels";
import styles from "./SizeReviewList.module.css";

export default function SizeReviewList({ sizeReviews }) {
  return (
    <ul className={styles.sizeReviewList}>
      {sizeReviews.map((sizeReview) => (
        <li className={styles.sizeReview} key={sizeReview.id}>
          <div>
            <div className={styles.date}>{formatDate(new Date(sizeReview.createdAt))}</div>
            <div className={styles.profile}>
              ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준) {sizeReview.size}
            </div>
          </div>
          <div className={styles.fit}>{labels.fit[sizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  );
}
