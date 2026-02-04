import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation">
        <Logo />
        <ul className={styles.nav__links}>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Log workout</a>
          </li>
          <li>
            <a href="#">My logbook</a>
          </li>
          <li>
            <a href="#">My Goals</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
