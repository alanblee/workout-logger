import React, { useState, useEffect } from "react";

import WorkoutForm from "./workout-form/workout-form";
import "./main-workout-page.scss";

const WorkoutPage = () => {
  //setState for all workouts
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState([]);

  //listen to when workouts change
  useEffect(() => {
    setWorkouts(workouts);
  }, [workouts]);
  //handle edit workout
  const handleEdit = workout => {
    setEditWorkout(workout);
  };
  const handleEditWorkout = editedWorkout => {
    setWorkouts([
      ...workouts.map(workout => {
        return workout.id === editedWorkout.id ? editedWorkout : workout;
      })
    ]);
    setEditWorkout([]);
  };
  //fn to handle form submit
  const handleFormSubmit = newWorkout => {
    setWorkouts([...workouts, newWorkout]);
  };
  const removeWorkout = id => {
    setWorkouts([
      ...workouts.filter(workout => {
        return workout.id !== id;
      })
    ]);
  };
  return (
    <div>
      <WorkoutForm
        handleWorkouts={handleFormSubmit}
        workoutToEdit={editWorkout}
        submitEdit={handleEditWorkout}
      />
      {workouts.map(workout => {
        return (
          <div key={workout.id} className="workout-entry">
            <h3>{workout.date}</h3>
            <h3>{workout.workoutFocus}</h3>
            <p>{workout.notes}</p>
            <button onClick={() => handleEdit(workout)}>edit</button>
            <button onClick={() => removeWorkout(workout.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutPage;
