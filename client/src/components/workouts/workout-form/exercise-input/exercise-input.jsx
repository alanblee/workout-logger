import React from "react";
import "./exercise-input.scss";

const ExerciseInput = ({ exercises, handleChange }) => {
  return exercises.map((val, indx) => {
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
            value={exercises[indx].name}
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
            value={exercises[indx].repsOrTime}
            className="repsOrTime"
            onChange={handleChange}
          />
        </label>
      </div>
    );
  });
};

export default ExerciseInput;
