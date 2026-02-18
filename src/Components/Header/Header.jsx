import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import menuIcon from "../../assets/menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <nav aria-label="Main navigation">
        <Logo />
        <Button
          type="button"
          variant={`${isMenuOpen ? "menuOpen" : "menu"}`}
          onClick={toggleMenu}
        >
          <span className="visually-hidden">Menu</span>
          <img src={menuIcon} alt="" />
        </Button>
        <ul
          className={`${styles.nav__links} ${isMenuOpen ? styles["nav__links--open"] : ""}`}
        >
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/log-workout" onClick={() => setIsMenuOpen(false)}>
              Log workout
            </NavLink>
          </li>
          <li>
            <NavLink to="/logbook" onClick={() => setIsMenuOpen(false)}>
              My logbook
            </NavLink>
          </li>
          <li>
            <NavLink to="/goals" onClick={() => setIsMenuOpen(false)}>
              My Goals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
