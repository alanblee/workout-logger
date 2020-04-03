import React, { useState, useEffect } from "react";
import "./workout-entry.scss";

const WorkoutEntry = ({ workout }) => {
  const [singleWorkout, setWorkout] = useState(workout);
  useEffect(() => {
    setWorkout(workout);
  }, [workout]);
  return <div>{ singleWorkout.workoutFocus}</div>;
};
export default WorkoutEntry;
