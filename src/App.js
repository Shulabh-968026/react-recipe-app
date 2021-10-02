import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchRecipe from './components/SearchRecipe';
const App=()=>{
  return (
    <div className="container-fluid bg-success" style={{width:"100vw",height:"auto",minHeight:"100vh"}}>
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
