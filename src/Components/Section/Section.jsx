import React from "react";
import styles from "./Section.module.scss";

const Section = ({ children, variant = "" }) => {
  const sectionClasses = [
    styles.section,
    variant && styles[`section__${variant}`],
  ]
    .filter(Boolean)
    .join(" ");
  return <section className={sectionClasses}>{children}</section>;
};

export default Section;
