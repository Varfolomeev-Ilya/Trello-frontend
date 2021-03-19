import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthentificated = window.localStorage.getItem('isAuthenticated');

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(isAuthentificated) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/sign-up'/>;
        }
      }}
    />
  );
};

export default ProtectedRoute;

// return (
//   isAuthentificated ?
//   <Route>
//     <Redirect to='/sign-up'/> 
//     :
//     <Redirect to='/sign-in'/>
//   </Route>
// ) 