import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LayoutPage from "../pages/Layout";

import { isAuthenticated } from "../services/auth";

const PrivateRoute =({component: Component, ...rest }) =>(
  <Route
  {... rest}
  render={props =>
  isAuthenticated() ? (
    <Component {...props} />
  ): (
    <Redirect 
    to={{pathname:"/signin",satet:{from: props.location}}}
    />
    )
  }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"  render ={()=><Redirect to="/app"/>} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={LayoutPage} />
      
    </Switch>
  </BrowserRouter>
);

export default Routes;
