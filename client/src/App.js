import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/nav/navbar";
import Workouts from "./components/workouts/main-workout-page";
import MainLanding from "./components/homepage/main-landing";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainLanding />
        </Route>
        <Route path="/workouts">
          <Workouts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
