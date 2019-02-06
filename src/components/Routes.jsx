import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Slider from "./Slider";
//const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Routes = () => {
  return (
    //   fallback={<Footer />}
    <Suspense>
      <Switch>
        <Route exact path="/" component={Slider} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
