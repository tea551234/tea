import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoIndex from "./components/TodoIndex";

class APP extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TodoIndex}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default APP;
