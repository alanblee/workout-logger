import React, { useState, useEffect } from "react";
import WorkoutForm from "./workout-form/workout-form";

import "./main-workout-page.scss";

const WorkoutPage = ({ getWorkout }) => {
  //setState for all workouts
  const [workouts, setWorkouts] = useState([]);
  const [editWorkout, setEditWorkout] = useState([]);

  //initial load of workouts
  useEffect(() => {
    loadWorkouts();
    setWorkouts(loadWorkouts());
  }, []);

  // handle form submit
  const handleFormSubmit = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  //handle edit workout
  const handleEdit = (workout) => {
    setEditWorkout(workout);
  };
  const handleEditWorkout = (editedWorkout) => {
    setWorkouts([
      ...workouts.map((workout) => {
        return workout.id === editedWorkout.id ? editedWorkout : workout;
      }),
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
  const removeWorkout = (id) => {
    setWorkouts([
      ...workouts.filter((workout) => {
        return workout.id !== id;
      }),
    ]);
  };
  //useHistory to go to new info route
  const moreInfo = (id) => {};
  return (
    <div onClick={saveWorkouts} className="workout-container">
      <WorkoutForm
        handleWorkouts={handleFormSubmit}
        workoutToEdit={editWorkout}
        submitEdit={handleEditWorkout}
      />
      <div className="workout-title">
        <h1>Workout Logs</h1>
      </div>
      <div className="card-container">
        {workouts.map((workout) => {
          return (
            <div className="card" key={workout.id}>
              <div
                className="img-data"
                onClick={() => {
                  saveWorkouts();
                }}
              >
                <div className="background-img"></div>
                <div className="manage-btns">
                  <i
                    onClick={() => handleEdit(workout)}
                    className="fas fa-edit edit"
                  ></i>
                  <i
                    onClick={() => removeWorkout(workout.id)}
                    className="fas fa-trash-alt delete"
                  ></i>
                </div>
              </div>
              <div className="workout-data">
                <h1 className="title">{workout.workoutFocus}</h1>
                <h2 className="subtitle">{workout.date}</h2>
                <p className="summary">{workout.notes}</p>
                <div className="cta-read-more">
                  <p onClick={() => moreInfo(workout.id)}>More Info &rarr;</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutPage;
