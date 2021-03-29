import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';
import Boards from '../pages/Boards/Boards';
import Admin from '../pages/Admin/Admin'
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
    path: '/boards',
    component: Boards,
  },
  { 
    path: '/admin',
    component: Admin,
  },
  {
    path: '/',
    component: NotFound,
  },
];


function Routers() {
  return (
    <Router>
      {/* <Switch> */}
        {routes.map(({ path, component, exact = true }, key) => (
         <Route
            exact={exact}
            path={path}
            component={component}
            key={key}
          /> 
        ))}
          <ProtectedRoute />
      {/* </Switch> */}
    </Router>
  );
};

export default Routers;