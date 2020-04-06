import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./workout-entry.scss";

const WorkoutEntry = ({ workouts }) => {
  const [workoutOne, setWorkout] = useState(workouts);
  useEffect(() => {
    setWorkout(workouts);
  }, [workouts]);
  return (
    <div className="more-info">
      <p>Core? {workoutOne.core === true ? "Yes" : "No"}</p>
      <ul>
        {workoutOne.exercises.map((exercise, indx) => {
          return (
            <li key={indx}>
              {exercise.name} - {exercise.repsOrTime} - {exercise.sets} sets
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default WorkoutEntry;
