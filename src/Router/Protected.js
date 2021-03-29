import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from '../pages/Signup/Signup'

const isAuthentificated = window.localStorage.getItem('isAuthenticated');

  const ProtectedRoute = () => {
    return (
      <Route
      // {...rest}
      //   render={(props) => {
      //     if (isAuthentificated) {
      //       return <Component {...props} />;
      //     } else {
      //       return <Redirect to='/sign-up' />;
      //     }
      //   }}
      >
        {isAuthentificated ? <Redirect to='/home'/> : <Redirect to='/sign-in'/>}
      </Route>
    );
  };

export default ProtectedRoute;