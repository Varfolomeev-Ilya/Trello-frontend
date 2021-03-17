import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound'

function Routers () {
  return(
    <Router>
      <Switch>
      <Route exact path='/sign-up' component={Signup} ></Route>
      <Route exact path='/sign-in' component={Signin} ></Route>
      <Redirect from='/' to='/sign-in'/>
      <Route component={NotFound}></Route>    
      </Switch>
    </Router>
  )
} 
export default Routers;