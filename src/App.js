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
import EWS from "./components/Clubs/ews";
import QuizBots from "./components/Clubs/quizbots";
import CodeBots from "./components/Clubs/codebots";
import PageNotFound from "./components/pageNotFound";
import BottomNavigation from "./components/Navigation/bottom-navigation";
/* import Events from "./components/events"; */
import Xenium from "./components/Xenium/xenium";
import Event1 from "./components/admin/event1";
import Event2 from "./components/admin/event2";
import Event3 from "./components/admin/event3";
import Event4 from "./components/admin/event4";
import Queries from "./components/admin/queries";

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
    fetch("https://parikalanpgdav.herokuapp.com/auth/signin", {
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
        this.props.onSuccess(); // redux to set isloggedin to true
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
      <Route path="/xenium" exact component={Xenium} />
      <Route path="/clubs/netweavers" exact component={Netweavers} />
      <Route path="/clubs/ews" exact component={EWS} />
      <Route path="/clubs/quizbots" exact component={QuizBots} />
      <Route path="/clubs/codebots" exact component={CodeBots} />
      <Route path="/admin/event1" exact component={Event1} />
      <Route path="/admin/event2" exact component={Event2} />
      <Route path="/admin/event3" exact component={Event3} />
      <Route path="/admin/event4" exact component={Event4} />
      <Route path="/admin/queries" exact component={Queries} />

      {/* <Route path="/events" exact component={Events} /> */}

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
