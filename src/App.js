import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
     <Router>
     <Switch>

     <Route exact path = "/" component ={Home}/>
     
     </Switch>
     </Router>
    </div>
  );
}

export default App;
