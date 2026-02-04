import { useState, useEffect } from "react";
import DisplayCard from "./Components/DisplayCard/DisplayCard";
import fireIcon from "./assets/fireIcon.svg";
import zigArrowIcon from "./assets/zigArrowIcon.svg";
import bullseyeIcon from "./assets/bullseyeIcon.svg";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Heading from "./Components/Heading/Heading";
import Button from "./Components/Button/Button";
import Form from "./Components/Form/Form";
import WorkoutCards from "./Components/AddWorkoutCard/WorkoutCards";
import SelectExercise from "./Components/SelectExercise/SelectExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState({});
  const handleSelectedExercise = (muscleGroup, exercise) => {
    setSelectedExercise({ [muscleGroup]: exercise });
  };

  return (
    <div className="container--default">
      <Header />
      <main>
        <Section variant="overview">
          <DisplayCard
            title="Today's workouts"
            details="Keep going!"
            variant="fire"
            icon_src={fireIcon}
            output="TODO 3"
          />
          <DisplayCard
            title="Weekly streak"
            details="TODO: days in a row!"
            variant="zigArrow"
            icon_src={zigArrowIcon}
            output="TODO 4"
          />
          <DisplayCard
            title="Weekly goal"
            details="TODO: days in a row"
            variant="bullseye"
            icon_src={bullseyeIcon}
            output="TODO 75%"
          />
        </Section>
        <Section variant="todays_workouts">
          <Heading level="2" title="Today's workouts" span="Log new workout" />
          <WorkoutCards>
            <SelectExercise
              muscleGroup="Upper Body"
              options={[
                "Bench Press",
                "Pull-Ups / Chin-Ups",
                "Overhead Press",
                "Push-Ups",
                "Bent-Over Barbell Row",
                "Dips",
              ]}
              handleSelect={handleSelectedExercise}
            />
            <SelectExercise
              muscleGroup="Lower Body"
              options={[
                "Squats",
                "Deadlifts",
                "Lunges",
                "Hip Thrusts / Glute Bridges",
                "Good Mornings",
                "Calf Rises",
              ]}
              handleSelect={handleSelectedExercise}
            />
            <SelectExercise
              muscleGroup="Core"
              options={[
                "Crunches",
                "Reverse Crunches",
                "Russian Twists",
                "Plank",
                "Mountain Climbers",
                "V-Ups",
              ]}
              handleSelect={handleSelectedExercise}
            />
          </WorkoutCards>
        </Section>
      </main>
    </div>
  );
}

export default App;
