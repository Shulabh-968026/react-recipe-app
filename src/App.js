import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchRecipe from './components/SearchRecipe';
require('dotenv').config()
const App=()=>{
  console.log(process.env.APPLICATION_ID)
  console.log(process.env.APPLICATION_KEY)
  return (
    <div className="container-fluid bg-success" style={{width:"100vw",height:"100vh"}}>
      <h1 className="text-center text-white text-uppercase p-3">Recipe Search Application</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={SearchRecipe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
