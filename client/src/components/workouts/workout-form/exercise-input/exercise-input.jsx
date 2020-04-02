import React from "react";
import "./exercise-input.scss";

const ExerciseInput = ({ exercises, handleChange }) => {
  return exercises.map((val, indx) => {
    let exerciseId = `exercise-${indx}`;
    let durationId = `repsOrTime-${indx}`;
    let setsId = `sets-${indx}`;
    const sets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const renderSelectOptions = () => {
      return sets.map((set, indx) => {
        return (
          <option value={set} key={indx}>
            {set}
          </option>
        );
      });
    };
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
          Duration Or Reps
          <input
            type="text"
            name={durationId}
            data-id={indx}
            value={exercises[indx].repsOrTime}
            className="repsOrTime"
            onChange={handleChange}
          />
        </label>
        <label htmlFor={setsId}>
          Sets
          <select
            name={setsId}
            data-id={indx}
            className="sets"
            onChange={handleChange}
          >
            {renderSelectOptions()}
          </select>
        </label>
      </div>
    );
  });
};

export default ExerciseInput;
