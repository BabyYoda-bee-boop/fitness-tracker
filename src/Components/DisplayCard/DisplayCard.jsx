import React from "react";
import styles from "./DisplayCard.module.scss";

const DisplayCard = ({
  title = "New Title",
  variant = "",
  details = "details",
  icon_src,
  output,
}) => {
  const displayCardClasses = [
    styles.displayCard,
    variant && styles[`displayCard--${variant}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={displayCardClasses}>
      <div className={styles.displayCard__heading}>
        <h2 className={styles.displayCard__title}>{title}</h2>
        <img className={styles.displayCard__icon} src={icon_src} alt="" />
      </div>
      <p className={styles.displayCard__output}>{output}</p>
      <p className={styles.displayCard__details}>{details}</p>
    </div>
  );
};

export default DisplayCard;
