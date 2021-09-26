import React from "react";
import User from "./components/User/User";
import HeaderAdmin from "./Header/HeaderAdmin";
import Notfound from "./Ui/Notfound";
import { Route, Switch, Redirect } from "react-router-dom";
import Homeadmin from "./components/Admin/Homeadmin";
import List from "./components/Main/List";
import AdminHospital from "./components/Main/AdminHospitals";
import Help from "./components/Main/Help";
import Footer from "./Footer/Footer";

const Routeadmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Homeadmin />
        </Route>

        <Route path="/hospitals">
          <AdminHospital />
        </Route>
        <Route path="/help">
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

export default Routeadmin;
