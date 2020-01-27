import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
