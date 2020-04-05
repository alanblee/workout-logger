import React, { useState, } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/nav/navbar";
import WorkoutPage from "./components/workouts/main-workout-page";
import MainLanding from "./components/homepage/main-landing";

import "./App.css";

function App() {
  const [singleWorkout, setWorkout] = useState({});
  //get single workout
  const handleSingleWorkout = workout => {
    setWorkout(workout);
  };
  return (
    <div className="main-container">
      <Navbar />
      <Switch>
        <Route  path="/workouts">
          <WorkoutPage getWorkout={handleSingleWorkout} />
        </Route>
        <Route  path="/">
          <MainLanding />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
