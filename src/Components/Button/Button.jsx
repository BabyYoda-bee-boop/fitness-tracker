import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  type = "submit",
  text,
  variant = "",
  onClick,
  className,
  children,
}) => {
  const buttonClasses = [
    styles.btn,
    className,
    variant && styles[`btn--${variant}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children || text}
    </button>
  );
};

export default Button;
