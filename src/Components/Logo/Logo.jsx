import React from "react";
import { NavLink } from "react-router-dom";
import logoSrc from "../../assets/dumbbellIcon.svg";
import styles from "./Logo.module.scss";

const Logo = ({ width = "3em", text = "Fitness Tracker", showText = true }) => {
  return (
    <div className={styles.logo}>
      <img
        src={logoSrc}
        alt=""
        className={styles["logo__icon"]}
        style={{ width: width, aspectRatio: 1 }}
      />
      {showText && (
        <NavLink to="/" className={styles.logo__text} href="#">
          {text}
        </NavLink>
      )}
    </div>
  );
};

export default Logo;
