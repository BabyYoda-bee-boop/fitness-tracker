import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ level = 1, title, span = "", classVar = "" }) => {
  const Tag = `h${level}`;
  const headingClass = [
    styles.heading,
    classVar && styles[`heading--${classVar}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={headingClass}>
      {title}
      {span && (
        <>
          <span>
            {" - "}
            {span}
          </span>
        </>
      )}
    </Tag>
  );
};

export default Heading;
