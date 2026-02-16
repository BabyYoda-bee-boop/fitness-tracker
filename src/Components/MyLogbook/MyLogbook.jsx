import React, { useState } from "react";
import styles from "./MyLogbook.module.scss";

const MyLogbook = ({ workouts }) => {
  const groupedByDay = workouts.reduce((acc, currentWorkout) => {
    const date = currentWorkout.date.split("T")[0]; // AddExercise -->  date: new Date().toISOString(),

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(currentWorkout);

    return acc;
  }, {});
  return (
    <div className={styles.logbook}>
      <h2 className={styles.logbook__title}>My logbook</h2>
      {Object.entries(groupedByDay).map(([date, exercises]) => (
        <div key={date} className={styles.logbook__dateGroup}>
          <h3 className={styles.logbook__date}>{date}</h3>
          <div className={styles.logbook__exercises}>
            {exercises.map((exercise) => (
              <div key={exercise.id}>
                <p>{exercise.exercise}</p>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Weight: {exercise.weight}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyLogbook;
