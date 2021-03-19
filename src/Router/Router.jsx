import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';
import ProtectedRoute from './Protected';

const routes = [
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
  },
  {
    component: NotFound,
  },
];

function Routers() {
  return (
    <Router>
        {routes.map(({ path, component, isAuthentificated = true, exact = true }, key  ) => (
          isAuthentificated ? 
          <Route
            exact={exact}
            path={path}
            component={component}
            key={key}
          /> :
          <ProtectedRoute/>
          ))}
    </Router>
  );
};

export default Routers;