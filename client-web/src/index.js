import "font-awesome/css/font-awesome.min.css";
import "./css/custom-bootstrap.scss";
import "./css/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();

// ReactDOM.render(<App />, document.getElementById("root"));
