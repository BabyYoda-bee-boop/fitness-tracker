import React, { useState } from "react";
import styles from "./AddExercise.module.scss";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";

const AddExercise = ({ selectedExercise, handleWorkout }) => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [isBodyweight, setIsBodyweight] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const workoutData = {
      muscleGroup: Object.keys(selectedExercise)[0],
      exercise: Object.values(selectedExercise)[0],
      sets: Number(sets),
      reps: Number(reps),
      weight: isBodyweight ? "bodyweight" : Number(weight),
      date: new Date().toISOString(),
    };

    if (typeof handleWorkout === "function") {
      handleWorkout(workoutData);
    }

    setSets("");
    setReps("");
    setWeight("");
    setIsBodyweight(false);
  };

  return (
    <>
      <h3 className={styles.exerciseTitle}>
        {Object.keys(selectedExercise).length > 0
          ? `${Object.values(selectedExercise)[0]}`
          : "Select an exercise"}
      </h3>
      <form onSubmit={handleSubmit} className={styles.addExercise}>
        {Object.keys(selectedExercise).length > 0 && (
          <>
            <label className="visually-hidden" htmlFor="sets">
              Sets
            </label>
            <InputBox
              type="number"
              id="sets"
              name="sets"
              placeholder="Sets"
              value={sets}
              onChange={(e) => setSets(e)}
              required
            />

            <label className="visually-hidden" htmlFor="reps">
              Repetitions
            </label>
            <InputBox
              type="number"
              id="reps"
              name="reps"
              placeholder="Repetitions"
              value={reps}
              onChange={(e) => setReps(e)}
              required
            />

            <div className={styles.addExercise__weightSection}>
              {!isBodyweight && (
                <>
                  <label className="visually-hidden" htmlFor="weight">
                    Weight
                  </label>
                  <InputBox
                    type="number"
                    step={2.5}
                    id="weight"
                    name="weight"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e)}
                    required={!isBodyweight}
                  />
                </>
              )}
              <div className={styles.addExercise__bodyweight}>
                <input
                  type="checkbox"
                  id="bodyweight"
                  checked={isBodyweight}
                  onChange={(e) => setIsBodyweight(!isBodyweight)}
                />
                <label htmlFor="weight">Bodyweight Exercise</label>
              </div>
            </div>
            <Button
              variant="submitExercise"
              className={styles.submitExercise}
              type="submit"
              text="Log Workout"
            />
          </>
        )}
      </form>
    </>
  );
};

export default AddExercise;
