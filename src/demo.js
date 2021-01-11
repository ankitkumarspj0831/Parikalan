import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Signup from "./Containers/SignUp/Signup";
import SignIn from "./Containers/SignIn/SignIn";
import Navv from "./Navv";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clubs" render={() => <div>This is clubs page.</div>} />
      <Route path="/quiz" render={() => <div>This is quiz page.</div>} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {routes}
        <Navv />
      </BrowserRouter>
    </div>
  );
}

export default App;
