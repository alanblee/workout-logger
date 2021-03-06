import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ExerciseInput from "./exercise-input/exercise-input";
import "./workout-form.scss";

const WorkoutForm = ({ handleWorkouts, workoutToEdit, submitEdit }) => {
  //set form states
  const [formValues, setFormValues] = useState({
    date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    workoutFocus: "",
    id: uuid(),
    core: null,
    exercises: [{ name: "", repsOrTime: "", sets: "1" }],
    notes: "",
  });

  useEffect(() => {
    if (workoutToEdit.id) {
      console.log(workoutToEdit);
      const { date, id, workoutFocus, core, exercises, notes } = workoutToEdit;
      setFormValues({
        ...formValues,
        date,
        id,
        workoutFocus,
        core,
        exercises,
        notes,
      });
    }
  }, [workoutToEdit]);
  //reset form
  const resetForm = (event) => {
    setFormValues({
      ...formValues,
      id: uuid(),
      workoutFocus: "",
      core: null,
      exercises: [{ name: "", repsOrTime: "", sets: "1" }],
      notes: "",
    });
  };
  //handle change
  const handleChange = (event) => {
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
        id: workoutToEdit.id ? workoutToEdit.id : uuid(),
        [name]: event.target.type === "checkbox" ? event.target.checked : value,
      });
    }
  };
  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (workoutToEdit.id) {
      submitEdit(formValues);
      resetForm(event);
    } else {
      handleWorkouts(formValues);
      resetForm(event);
    }
  };
  //add exercise
  const addExercise = () => {
    setFormValues({
      ...formValues,
      exercises: [
        ...formValues.exercises,
        { name: "", repsOrTime: "", sets: "1" },
      ],
    });
  };
  return (
    <div className="center-content">
      <div className="form-wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="workoutFocus">
            What did you focus on today?
            <input
              type="text"
              name="workoutFocus"
              onChange={handleChange}
              value={formValues.workoutFocus}
            />
          </label>
          <ExerciseInput
            exercises={formValues.exercises}
            handleChange={handleChange}
          />
          <div>
            <span onClick={addExercise}>+ exercise</span>
          </div>
          <label htmlFor="core">
            Core?
            <input
              type="checkbox"
              value={workoutToEdit.core === true ? "checked" : "unchecked"}
              name="core"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="notes">
            Workout Notes
            <textarea
              rows="5"
              name="notes"
              value={formValues.notes}
              onChange={handleChange}
            />
          </label>
          <input className="submit-btn" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
