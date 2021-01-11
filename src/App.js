import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/home";
import Signup from "./Containers/SignUp/Signup";
import SignIn from "./Containers/SignIn/SignIn";
import Clubs from "./components/Clubs/clubs";
import Netweavers from './components/Clubs/netweavers';

class App extends Component {
  routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clubs" exact component={Clubs} />
      <Route path="/clubs/netweavers" component={Netweavers}/>
      <Route path="/quiz" render={() => <div>This is quiz page.</div>} />
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
  );
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
