import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./workout-form.scss";

const WorkoutForm = () => {
  //set form states
  const [formValues, setFormValues] = useState({
    date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    id: "",
    workoutFocus: "",
    core: "",
    exercises: [{ name: "", repsOrTime: "" }]
  });

  //handle change
  const handleChange = event => {
    const { className, value, name, dataset } = event.target;
    //check if event classname matches dynamic inputs
    if (["name", "repsOrTime"].includes(className)) {
      //make copy of exercise array
      let exercises = [...formValues.exercises];
      //target specific input with dataset.id(set to index) and give it the uses input value
      exercises[dataset.id][className] = value;
      //set the state
      setFormValues({ ...formValues, exercises });
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
  };
  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
    setFormValues({
      ...formValues,
      id: uuid()
    });
    console.log(formValues);
  };
  //add exercise
  const addExercise = event => {
    setFormValues({
      ...formValues,
      exercises: [...formValues.exercises, { name: "", repsOrTime: "" }]
    });
  };
  return (
    <div className="form-wrapper">
      <form action="" className="form" onSubmit={handleSubmit}>
        What body part
        <label htmlFor="workoutFocus">
          <input
            type="text"
            name="workoutFocus"
            onChange={handleChange}
            value={formValues.workoutFocus}
          />
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </label>
            </div>
          );
        })}
        <div>
          <button onClick={addExercise}>+ exercise</button>
        </div>
        <label htmlFor="core">
          Core Program
          <input
            type="text"
            name="core"
            value={formValues.core}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default WorkoutForm;
