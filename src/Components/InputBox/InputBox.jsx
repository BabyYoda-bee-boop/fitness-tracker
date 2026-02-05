import React from "react";
import * as styles from "./InputBox.module.scss";

const InputBox = ({
  value = "",
  onChange,
  type = "text",
  name = "",
  id,
  className = "",
  placeholder = "",
  min = 0,
  step,
}) => {
  const inputClasses = [styles.input, className].filter(Boolean).join(" ");

  const handleInput = (e) => {
    if (typeof onChange === "function") {
      onChange(e.target.value);
    }
  };

  return (
    <input
      onChange={handleInput}
      className={inputClasses}
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      min={min}
      step={step}
    />
  );
};

export default InputBox;
