import React from 'react';
import { Route } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';

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
];

const PrivateRoute = ({component: Component, restricted, ...rest}) => {
    return (
      routes.map(({ path, component, exact = false,  }, key  ) => (
        <Route 
        path={path}
        component={component}
        exact={exact}
        key={key}
         />
      ))   
    );
}

export default PrivateRoute;