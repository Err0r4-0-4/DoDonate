import React from "react";
import User from "./components/User/User";
import HeaderUser from "./Header/HeaderUser";
import Notfound from "./Ui/Notfound";
import { Route, Switch, Redirect } from "react-router-dom";
import Homeuser from "./components/User/Homeuser";
import UserHospitals from "./components/Main/UserHospitals";
import Help from "./components/Main/Help";
import Footer from "./Footer/Footer";
import SimpleForm from "./Bot/SimpleForm";

const Routeuser = () => {
  return (
    <div>
      <SimpleForm />

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
        <Route path="/help" exact>
          <Help />
        </Route>

        <Route path="/*">
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Routeuser;
