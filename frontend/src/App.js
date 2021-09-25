import logo from "./logo.svg";
import { useSelector } from "react-redux";
import Routehos from "./Routehos";
import Loginpage from "./components/Login/Loginpage";
import { Route, useLocation, Switch } from "react-router";

import "./App.css";
function App() {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);

  const loginscreen = (
    <Switch>
      <Route path="/">
        <Loginpage />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      {/* <Route path="/">
        <Home />
      </Route> */}

      {/* <Routehos></Routehos>
<Routeuser />
<Routeadmin /> */}
      {/* 
      {counter ? (
        name ? (
          <Routehos></Routehos>
        ) : (
          <Routeuser />
        )
      ) : name ? (
        <Routeadmin />
      ) : (
        loginscreen
      )} */}

      {counter && name ? <Routehos></Routehos> : loginscreen}
    </div>
  );
}

export default App;
