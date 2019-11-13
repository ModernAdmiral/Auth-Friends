import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Friends from "./Components/Friends";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Log in</Link>

        <Switch>
          <Route path="/login" component={Login} />

          <PrivateRoute path="/protected" component={Friends} />

          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
