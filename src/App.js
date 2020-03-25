import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './Template';
import Home from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Template} />
        </Router>
    </div>
  );
}

export default App;
