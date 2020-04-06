import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/nav/navbar";
import WorkoutPage from "./components/workouts/main-workout-page";
import MainLanding from "./components/homepage/main-landing";

import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Switch>
        <Route path="/workouts">
          <WorkoutPage />
        </Route>
        <Route path="/">
          <MainLanding />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
