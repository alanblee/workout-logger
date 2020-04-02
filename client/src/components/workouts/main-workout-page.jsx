import React, { useState, useEffect } from "react";

import WorkoutForm from "./workout-form/workout-form";
import "./main-workout-page.scss";

const WorkoutPage = () => {
  //setState for all workouts
  const [workouts, setWorkouts] = useState([]);
  //listen to when workouts change
  useEffect(() => {
    setWorkouts(workouts);
    console.log(workouts);
  }, [workouts]);
  //fn to handle form submit
  const handleFormSubmit = newWorkout => {
    setWorkouts([...workouts, newWorkout]);
  };
  return (
    <div>
      <WorkoutForm handleWorkouts={handleFormSubmit} />
      {workouts.map(workout => {
        return (
          <div key={workout.id} className="workout-entry">
            <h3>{workout.date}</h3>
            <h3>{workout.workoutFocus}</h3>
            <p>{workout.notes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutPage;
