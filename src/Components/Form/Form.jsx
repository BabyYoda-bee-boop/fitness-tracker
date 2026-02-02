import React from "react";
import * as styles from "./Form.module.scss";

const Form = ({ action = "", method = "", variant, children, onSubmit }) => {
  const formClasses = [styles.form, variant && `form--${variant}`]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      onSubmit={onSubmit}
      action={action}
      method={method}
      className={formClasses}
    >
      {children}
    </form>
  );
};

export default Form;
