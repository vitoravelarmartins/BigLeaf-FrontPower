import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import AccountList from "../pages/account/AccountList"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="accounts" component={AccountList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
