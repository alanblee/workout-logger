import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ExerciseInput from "./exercise-input/exercise-input";
import "./workout-form.scss";

const WorkoutForm = ({ handleWorkouts }) => {
  //set form states
  const [formValues, setFormValues] = useState({
    date: new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/"),
    workoutFocus: "",
    id: uuid(),
    core: false,
    exercises: [{ name: "", repsOrTime: "", sets: 1 }],
    notes: ""
  });

  //handle change
  const handleChange = event => {
    const { className, value, name, dataset } = event.target;
    //check if event classname matches dynamic inputs
    if (["name", "repsOrTime", "sets"].includes(className)) {
      //make copy of exercise array
      let exercises = [...formValues.exercises];
      //target specific input with dataset.id(set to index) and give it the uses input value
      exercises[dataset.id][className] = value;
      //set the state
      setFormValues({ ...formValues, exercises });
    } else {
      setFormValues({
        ...formValues,
        id: uuid(),
        [name]: event.target.type === "checkbox" ? event.target.checked : value
      });
    }
  };
  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
    setFormValues({
      ...formValues,
      id: uuid(),
      workoutFocus: "",
      core: false,
      exercises: [{ name: "", repsOrTime: "", sets: 1 }],
      notes: ""
    });
    handleWorkouts(formValues);
  };
  //add exercise
  const addExercise = () => {
    setFormValues({
      ...formValues,
      exercises: [
        ...formValues.exercises,
        { name: "", repsOrTime: "", sets: 1 }
      ]
    });
  };
  return (
    <div className="form-wrapper">
      <form action="" className="form" onSubmit={handleSubmit}>
        What did you focus on today?
        <label htmlFor="workoutFocus">
          <input
            type="text"
            name="workoutFocus"
            onChange={handleChange}
            value={formValues.workoutFocus}
          />
        </label>
        <label htmlFor="core">
          Core?
          <input type="checkbox" name="core" onChange={handleChange} />
        </label>
        <ExerciseInput
          exercises={formValues.exercises}
          handleChange={handleChange}
        />
        <div>
          <span onClick={addExercise}>+ exercise</span>
        </div>
        <label htmlFor="notes">
          Workout Notes
          <input
            type="textarea"
            name="notes"
            value={formValues.notes}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default WorkoutForm;
