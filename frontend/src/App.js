import "./App.css";
import { Route, Switch } from "react-router";
import Loginpage from "./components/Login/Loginpage";

import Routeadmin from "./Routeadmin";
import Routehos from "./Routehos";
import Routeuser from "./Routeuser";
import { useSelector } from "react-redux";
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
      )}
    </div>
  );
}

export default App;
