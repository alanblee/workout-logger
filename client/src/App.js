import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/nav/navbar";
import WorkoutPage from "./components/workouts/main-workout-page";
import WorkoutEntry from "./components/workouts/workout/workout-entry.jsx";
import MainLanding from "./components/homepage/main-landing";

import "./App.css";

function App() {
  const [singleWorkout, setWorkout] = useState({});
  //get single workout
  const handleSingleWorkout = workout => {
    setWorkout(workout);
  };
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainLanding />
        </Route>
        <Route exact path="/workouts">
          <WorkoutPage getWorkout={handleSingleWorkout} />
        </Route>
        <Route path="/workouts/:id">
          <WorkoutEntry workout={singleWorkout} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
