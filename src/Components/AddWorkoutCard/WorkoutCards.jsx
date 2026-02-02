import React from "react";
import Heading from "../Heading/Heading";
import styles from "./WorkoutCards.module.scss";

const WorkoutCards = ({ children }) => {
  return <article className={styles.workoutCards}>{children}</article>;
};

export default WorkoutCards;
