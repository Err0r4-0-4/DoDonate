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

  let render = loginscreen;

  if(localStorage.getItem("type") == "hospital"){
    render = <Routehos></Routehos>
  }

  else if(localStorage.getItem("type") == "user"){
    render = <Routeuser />
  }

  else if(localStorage.getItem("type") == "admin"){
    render = <Routeadmin />
  }

  return (
    <div className="App">
      {/* <Route path="/">
        <Home />
      </Route> */}

      {/* <Routehos></Routehos>
<Routeuser />
<Routeadmin /> */}


      {/* {counter ? (
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

      {render}
    </div>
  );
}

export default App;
