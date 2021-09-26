import React from "react";
import { useState } from "react";
import { Route, useLocation, Switch, Redirect } from "react-router";
import Admin from "./components/Admin/Admin";

import Header from "./Header/Header";
import Mainpage from "./components/Main/Mainpage";
import Newuser from "./components/Main/Newuser";
import Donate from "./components/Main/Donate";
import Form from "./components/form/Form";
import List from "./components/Main/List";
import Listing from "./Listing";
import Notfound from "./Ui/Notfound";
import Help from "./components/Main/Help";
import Footer from "./Footer/Footer";
const Routehos = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/hospital/home" />
        </Route>
        <Route path="/home" exact>
          <Redirect to="/hospital/home" />
        </Route>
        <Route path="/hospital/home">
          <Mainpage />
        </Route>
        <Route path="/hospital/new">
          <Newuser />
        </Route>
        <Route path="/hospital/donate">
          <Donate />
        </Route>
        <Route path="/hospital/list">
          <List />
        </Route>
        <Route path="/hospital/help">
          <Help />
        </Route>
        <Route path="/hospital/admin">
          <Admin />
        </Route>
        <Route path="/*">
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Routehos;
