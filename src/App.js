import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import SignUpForm from './forms/SignUpForm.js';
import SignInForm from './forms/SignInForm';
import './App.css';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <div className="Page_Left"></div>
      <div className="Page_Right">
        <div className="SwitchForms">
          <NavLink exact to="/" className="SwitchForms_Button" activeClassName="SwitchForms_Button--Active">Sign Up</NavLink>
          <NavLink to="/sign-in" className="SwitchForms_Button" activeClassName="SwitchForms_Button--Active">Sign In</NavLink>
        </div> 
        <Route exact path="/" component={SignUpForm}>
        
        </Route>
        <Route path="/sign-in" component={SignInForm}>

        </Route>
      </div>
      
    </div>
    </Router> 
  );
  }
}

export default App;
