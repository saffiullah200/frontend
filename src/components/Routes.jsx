import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Slider from "./Slider";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./about"));
const Faq = lazy(() => import("./Faq"));
const Login = lazy(() => import("./Login"));
const ourServices = lazy(() => import("./ourServices"));
const Routes = () => {
  return (
    <Suspense fallback={<Footer />}>
      <Switch>
        <Route exact path="/" component={Slider} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ourServices" component={ourServices} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
