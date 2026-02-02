import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type = "submit", text, variant = "", onClick }) => {
  const buttonClasses = [styles.btn, variant && styles[`btn--${variant}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
