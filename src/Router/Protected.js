import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';


  // const isAuthentificated = localStorage.getItem('user', 'value')

  const ProtectedRoute = ({ component: Component, value: Value}) => {
    return (
      <Route
        render={(isAuthentificated) => {
          if (isAuthentificated) {
            return <Component />;
          } else {
            return <Redirect to='/sign-in' />;
          }
        }}
      />
    );
  };


  // const mapStateToProps = (state) => ({
  //   isAuthentificated: state.checkAuth.isAuthentificated,
  // });

  // export default connect(mapStateToProps)(ProtectedRoute);

export default ProtectedRoute;