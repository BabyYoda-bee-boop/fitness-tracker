import React, { useState } from "react";
import styles from "./SelectExercise.module.scss";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const SelectExercise = ({ handleSelect, muscleGroup = "", options = [] }) => {
  const [localSelection, setLocalSelection] = useState("");

  const handleChange = (e) => {
    setLocalSelection(e.target.value);
  };

  const handleConfirm = () => {
    if (typeof handleSelect === "function" && localSelection) {
      handleSelect(muscleGroup, localSelection);
    }
  };

  return (
    <div
      className={[
        styles.selectExercise,
        muscleGroup && styles[`select__${muscleGroup}`],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Heading classVar="h3" level="3" title={muscleGroup} />
      <label className="visually-hidden" htmlFor={muscleGroup}>
        {muscleGroup}
      </label>
      <select onChange={handleChange} name={muscleGroup} id={muscleGroup}>
        <option disabled defaultValue="">
          Select an exercise
        </option>
        {options.map((option, i) => (
          <option className={styles.select__option} value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      <Button
        variant={styles.selectExercise}
        type="button"
        text="Confirm selection"
        onClick={handleConfirm}
      />
    </div>
  );
};

export default SelectExercise;
