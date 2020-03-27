import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
