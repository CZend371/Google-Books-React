import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  state = {
    books: ""
    // message: ""
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
