import React, { useState, useEffect } from "react";

import WorkoutForm from "./workout-form/workout-form";
import "./main-workout-page.scss";

const WorkoutPage = () => {
  //setState for all workouts
  const [workouts, setWorkouts] = useState([{}]);

  //fn to handle form submit
  const handleFormSubmit = newWorkout => {
    setWorkouts(...workouts, newWorkout);
  };
  return <div><WorkoutForm /></div>;
};

export default WorkoutPage;
