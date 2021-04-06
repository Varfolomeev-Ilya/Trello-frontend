import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...props }) {
  const checkLoggedIn = useSelector((state) => state.users.registeredUser.id)
  const isAuthRoute = props.path === '/sign-up' || props.path === '/sign-in';
  const isPublicRoute = isAuthRoute || props.path === '/';
  const isAuthentificated = checkLoggedIn ?
    (
      <Component />
    ) : (
      <Redirect to='/sign-in' />
    );
  const protectRoute = () => {
    if (checkLoggedIn && isAuthRoute) {
      return <Redirect to='/home' />
    }
    return isPublicRoute ? <Component /> : isAuthentificated;
  };

  return <Route {...props} render={protectRoute} />

};

export default ProtectedRoute;
