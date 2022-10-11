// React
import React from "react";
// React
// CSS
import styles from "./Card.module.css";
// CSS

const Card = ({
  currency1,
  currency2,
  nameEn,
  nameFa,
  priceRial,
  change,
  min,
  max,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between rounded-3xl box-border p-5 ${styles.cardItem}`}
    >
      <div className={styles.left}>
        <img src={currency1?.image || currency2?.image} alt="currImage" />
      </div>
      <div className={styles.right}>
        <p>
          Name Of curr: {nameEn} / {nameFa}
        </p>
        <p>priceRial : {priceRial}</p>
        <p style={{ color: Number(change) > 0 ? "green" : "red" }}>
          change : {change}
        </p>
        <p>min : {min}</p>
        <p>max : {max}</p>
      </div>
    </div>
  );
};

export default Card;
