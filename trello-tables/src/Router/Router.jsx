import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';

const routes = [
  // {
  //   path: '',
  //   component: NotFound,
  // },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/sign-up',
    component: Signup,
  },
  {
    path: '/sign-in',
    component: Signin,
  }
];

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
if (!routeComponents) {
   <Route component={NotFound} />
 } 

function Routers () {
  return(
    <Router>      
      {routeComponents}
    </Router>
  );
};

export default Routers;