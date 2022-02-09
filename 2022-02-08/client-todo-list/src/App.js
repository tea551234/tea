import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tododel from "./components/TodoDelete";

import TodoIndex from "./components/TodoIndex";
import TodoEdit from "./components/TodoEdit";
import TodoCreate from "./components/TodoCreate";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TodoIndex} exact />
          <Route path="/Todo/Index" component={TodoIndex} exact />
          <Route path="/Todo/Edit/:id" component={TodoEdit} />
          <Route path="/TOdo/Delete/:id" component={Tododel}></Route>
          <Route path="/TOdo/Create/:id" component={TodoCreate}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
