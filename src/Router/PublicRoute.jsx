import React from 'react';
import { Route} from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Signin from '../pages/SignIn/SignIn';

const routes = [
  {
    path: '/sign-in',
    component: Signin,
  },
  {
    path: '/',
    component: NotFound,
  },
];
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
      routes.map(({ path, component, exact = true,  }, key  ) => (
        <Route
          exact={exact}
          path={path}
          component={component}
          key={key}
        />
      ))
    );
};

export default PublicRoute;