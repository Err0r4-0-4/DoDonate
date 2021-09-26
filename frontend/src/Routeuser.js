import React from "react";
import User from "./components/User/User";
import HeaderUser from "./Header/HeaderUser";
import Notfound from "./Ui/Notfound";
import { Route, Switch, Redirect } from "react-router-dom";
import Homeuser from "./components/User/Homeuser";
import UserHospitals from "./components/Main/UserHospitals";

const Routeuser = () => {
  return (
    <div>
      <HeaderUser />
      <Switch>
      <Route path="/hospital/*" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Homeuser />
        </Route>
        <Route path="/payment" exact>
          <User />
        </Route>
        <Route path="/hospitals" exact>
          <UserHospitals />
        </Route>

        <Route path="/*">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
};

export default Routeuser;
