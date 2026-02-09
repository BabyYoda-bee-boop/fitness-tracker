import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation">
        <Logo />
        <ul className={styles.nav__links}>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/log-workout">Log workout</NavLink>
          </li>
          <li>
            <NavLink to="/logbook">My logbook</NavLink>
          </li>
          <li>
            <NavLink to="/goals">My Goals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
