import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import Signin from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import HomePage from '../pages/Home/Home';
import Account from '../pages/Account/Account';
import ProtectedRoute from './Protected';
import { connect } from 'react-redux';

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
      <ProtectedRoute/>
    </Router>   
  );
};

const mapStateToProps = (state) => ({
  isAuthentificated: state.checkAuth.isAuthentificated,
});

export default connect(mapStateToProps)(Routers);
