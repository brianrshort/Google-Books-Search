//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer";
import { Search } from './pages/Search';
import { Saved } from './pages/Saved';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} /> 
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
