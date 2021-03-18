import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
    needsAuth: false,
  },
  {
    component: NotFound,
  },
];


// const isAutenticated = true;

const RenderRoute = (route) => {
  if (routes.needsAuth && !!isAutenticated()) {
    <Redirect path='/sign-in'/>
  }
  return(
    <Route
    exact
    path={routes.path}
    render={(props) => <route.component {...props} />}
  ></Route>
  );
};

function Routers() {
  return (
    <Router>
        <Switch>
        {routes.map(( route, index ) => (
          <RenderRoute route={route} key={index} />
        ))}          
        </Switch>
    </Router>
  );
};

export default Routers;