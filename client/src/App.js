import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
//import { Container, Row, Col } from "./components/Grid";
import SignUp from "./pages/SignUp";

import Event from "./pages/Event";
import Landing from "./pages/Landing";
import MatchCard from "./pages/MatchCard"
import YourAccount from "./pages/YourAccount"
import UserMatches from "./pages/UserMatches";


class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Router>
      <Switch>
      <Route exact path="/" component={Landing} />  
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/event" component={Event} /> 
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/youraccount" component={YourAccount} />
      <Route exact path="/match" component={MatchCard} />
      <Route exact path="/usermatches" component={UserMatches} />
      </Switch>
      </Router> 
      </div>
    );
  }
}

export default App;
