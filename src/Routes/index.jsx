import { Switch, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SingUp from "../Components/Singup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/singup">
        <SingUp />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
