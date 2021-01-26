import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/home";
import Signup from "./Containers/SignUp/Signup";
import SignIn from "./Containers/SignIn/SignIn";
import Clubs from "./components/Clubs/clubs";
import Netweavers from "./components/Clubs/netweavers";
import PageNotFound from "./components/pageNotFound";
import BottomNavigation from "./components/Navigation/bottom-navigation";
import Events from './components/events';
import Xenium from './components/xenium';

class App extends Component {
  state = {
    isAuth: false,
    token: null,
    userId: null,
  };

  componentDidMount() {
    console.log("Inside componet did mount.");
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    console.log("Not expired");
    const userId = localStorage.getItem("userId");
    const remainingMilliSeconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.props.onSuccess();
    this.setAutoLogout(remainingMilliSeconds);
  }

  loginHandler = (event, authData) => {
    console.log("inside login handler");
    event.preventDefault();
    fetch("http://localhost:8000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.props.onSuccess();     // redux to set is logged in to true
        this.setState({
          isAuth: true,
          token: resData.token,
          userId: resData.userId,
        });
        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isAuth: false,
        });
      });
  };

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clubs" exact component={Clubs} />
      <Route path="/xenium" exact component={Xenium}/>
      <Route path="/clubs/netweavers" component={Netweavers} />
      <Route path="/events" component={Events} />

      <Route
        path="/auth/signin"
        render={(props) => <SignIn {...props} onSignIn={this.loginHandler} />}
      />
      <Route path="/auth/signup" component={Signup} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
  render() {
    return (
      <div className="App">
        <Navigation />
        <p></p>
        {this.routes}
        <BottomNavigation />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: () => dispatch({ type: "SUCCESS" }),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
