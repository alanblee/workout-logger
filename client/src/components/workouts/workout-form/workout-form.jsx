import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./workout-form.scss";

const WorkoutForm = () => {
  //set form states
  const [formValues, setFormValues] = useState({
    date: Date.now(),
    id: "",
    workoutFocus: "",
    core: "",
    exercises: [{ name: "", repsOrTime: "" }]
  });

  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
  };
  //add exercise
  const addExercise = event => {
    setFormValues({
      exercises: [...formValues.exercises, { name: "", repsOrTime: "" }]
    });
  };
  return (
    <div className="form-wrapper">
      <form action="" className="form" onSubmit={handleSubmit}>
        What body part
        <label htmlFor="workoutFocus">
          <input type="text" name="workoutFocus" />
        </label>
        {formValues.exercises.map((val, indx) => {
          let exerciseId = `exercise-${indx}`;
          let durationId = `repsOrTime-${indx}`;
          return (
            <div key={indx}>
              <label htmlFor={exerciseId}>
                Exercise Name
                <input
                  type="text"
                  name={exerciseId}
                  data-id={indx}
                  value={formValues.exercises[indx].name}
                  className="name"
                />
              </label>

              <label htmlFor={durationId}>
                Duration
                <input
                  type="text"
                  name={durationId}
                  data-id={indx}
                  value={formValues.exercises[indx].repsOrTime}
                  className="repsOrTime"
                />
              </label>
            </div>
          );
        })}
        <div>
          <button onClick={addExercise}>+ exercise</button>
        </div>
        <label htmlFor="excercises"></label>
      </form>
    </div>
  );
};

export default WorkoutForm;
