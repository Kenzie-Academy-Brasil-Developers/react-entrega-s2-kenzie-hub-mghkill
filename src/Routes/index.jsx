import { Switch, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SingUp from "../Components/Singup";
import { useState } from "react";

const Routes = ({ setBackGround }) => {
  const [allowed, setAllowed] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Home allowed={allowed} setAllowed={setAllowed} />
      </Route>
      <Route exact path="/login">
        <Login
          allowed={allowed}
          setAllowed={setAllowed}
          setBackGround={setBackGround}
        />
      </Route>
      <Route exact path="/singup">
        <SingUp allowed={allowed} setAllowed={setAllowed} />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          allowed={allowed}
          setAllowed={setAllowed}
          setBackGround={setBackGround}
        />
      </Route>
    </Switch>
  );
};
export default Routes;
