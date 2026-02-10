import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import DisplayCard from "./Components/DisplayCard/DisplayCard";
import fireIcon from "./assets/fireIcon.svg";
import zigArrowIcon from "./assets/zigArrowIcon.svg";
import bullseyeIcon from "./assets/bullseyeIcon.svg";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Heading from "./Components/Heading/Heading";
import WorkoutCards from "./Components/AddWorkoutCard/WorkoutCards";
import SelectExercise from "./Components/SelectExercise/SelectExercise";
import AddExercise from "./Components/AddExercise/AddExercise";

function App() {
  const [exercises, setExercises] = useState({});
  const [selectedExercise, setSelectedExercise] = useState({});
  const location = useLocation();
  const [workouts, setWorkouts] = useState([]);
  const [stats, setStats] = useState({
    todaysWorkouts: 0,
    weeklyStreak: 0,
    weeklyGoal: 0,
    weeklyGoalProgress: 0,
  });

  const handleSelectedExercise = (muscleGroup, exercise) => {
    setSelectedExercise({ [muscleGroup]: exercise });
  };
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:3000";

  useEffect(() => {
    if (location.pathname === "/log-workout") {
      setSelectedExercise({});
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    async function fetchExercises() {
      try {
        const resp = await fetch(`${API_URL}/exercises`);
        if (!resp.ok) throw new Error("Network response was not OK");

        const data = await resp.json();

        setExercises(data);
      } catch (err) {
        setError(err.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchExercises();
  }, []);

  const calculateStats = (workoutsData) => {
    const today = new Date().toISOString();
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
  };

  useEffect(() => {
    setError(null);
    async function fetchWorkouts() {
      try {
        const resp = await fetch(`${API_URL}/workouts`);
        if (!resp.ok) throw new Error("Failed to fetch workouts");
        const data = await resp.json();

        setWorkouts(data);
        calculateStats(data);
      } catch (err) {
        console.error("Error fetching workouts:", err);
        setError(err.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    fetchWorkouts();
  }, []);

  if (isLoading) {
    return <p>Fetching data...</p>;
  }

  const handleWorkout = async (workoutData) => {
    setError(null);
    try {
      const response = await fetch(`${API_URL}/workouts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workoutData),
      });

      if (!response.ok) throw new Error("Failed to logG workout");

      alert("Workout logged successfully!");
      setSelectedExercise({});
    } catch (err) {
      console.log("Error logging workout: ", err);
      setError(err.message);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container--default">
      <Header />
      <main>
        {error && (
          <div style={{ color: "red", padding: "1rem", background: "#fee" }}>
            Error: {error}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <Section variant="overview">
                <div className="cards-row">
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
                </div>
                <Link to="/log-workout" className="overview__link">
                  Log New Workout!
                </Link>
              </Section>
            }
          />
          <Route
            path="/log-workout"
            element={
              <>
                <Section variant="todays_workouts">
                  <Heading
                    level="2"
                    title="Today's workouts"
                    span="Log new workout"
                  />
                  <WorkoutCards>
                    {Object.entries(exercises).map(([muscleGroup, options]) => (
                      <SelectExercise
                        key={muscleGroup}
                        muscleGroup={muscleGroup}
                        options={options}
                        handleSelect={handleSelectedExercise}
                      />
                    ))}
                  </WorkoutCards>
                </Section>
                <Section variant="logWorkout">
                  <AddExercise
                    selectedExercise={selectedExercise}
                    handleWorkout={handleWorkout}
                  />
                </Section>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
