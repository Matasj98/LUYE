import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import SolveTest from "./Pages/SolveTest/SolveTest";
import CreateTest from "./Pages/CreateTest/CreateTest";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createTest" component={CreateTest} />
          <Route exact path="/solveTest" component={SolveTest} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
