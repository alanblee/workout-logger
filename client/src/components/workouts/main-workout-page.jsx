import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkoutForm from "./workout-form/workout-form";
import "./main-workout-page.scss";

const WorkoutPage = ({ getWorkout }) => {
  //setState for all workouts
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState([]);
  //initial load of workouts
  //listen to when workouts change
  useEffect(() => {
    setWorkouts(workouts);
  });

  useEffect(() => {
    loadWorkouts();
    setWorkouts(loadWorkouts());
  }, []);

  // handle form submit
  const handleFormSubmit = newWorkout => {
    setWorkouts([...workouts, newWorkout]);
  };

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

  //save workouts
  const saveWorkouts = () => {
    localStorage.setItem("workout", [JSON.stringify(workouts)]);
  };
  //load workouts
  const loadWorkouts = () => {
    let data = localStorage.getItem("workout");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  //remove workout
  const removeWorkout = id => {
    setWorkouts([
      ...workouts.filter(workout => {
        return workout.id !== id;
      })
    ]);
  };
  return (
    <div onClick={saveWorkouts}>
      <WorkoutForm
        handleWorkouts={handleFormSubmit}
        workoutToEdit={editWorkout}
        submitEdit={handleEditWorkout}
        saveLocal={saveWorkouts}
      />
      {workouts.map(workout => {
        return (
          <div
            key={workout.id}
            className="workout-entry"
            onClick={() => {
              getWorkout(workout);
            }}
          >
            <Link to={`/workouts/${workout.id}`}>
              <h3>{workout.date}</h3>
            </Link>
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
