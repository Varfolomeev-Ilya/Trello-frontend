import React from 'react';
import { Switch } from 'react-router-dom';
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
    // path: '/',
    component: NotFound,
  },
];

function Routers() {
  return (
    <Switch>
      {routes.map(({ path, component, exact = true }, key) => (
          <ProtectedRoute
            exact={exact}
            path={path}
            key={key}
            component={component}
          /> 
      ))}
    </Switch>
  );
};

export default Routers;
