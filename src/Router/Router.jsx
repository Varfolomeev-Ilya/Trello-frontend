import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';

const routes = [
  {
    path: '/account',
    component: Account,
    needsAuth: true,
  },
  {
    path: '/home',
    component: HomePage,
    needsAuth: true,
  },
  {
    path: '/sign-up',
    component: Signup,
    needsAuth: false,
  },
  {
    path: '/sign-in',
    component: Signin,
    needsAuth: true,
  },
  {
    component: NotFound,
  },
];



function Routers() {
  return (
    <Router>
        <Switch>
        {routes.map(({ path, component, exact = true }, key  ) => (
          <Route
            exact={exact}
            path={path}
            component={component}
            key={key}
          />
        ))}          
        </Switch>
    </Router>
  );
};

export default Routers;