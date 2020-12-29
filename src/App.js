import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./home";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clubs" render={() => <div>This is clubs page.</div>}/>
      <Route path="/quiz" render={() => <div>This is quiz page.</div>}/>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
