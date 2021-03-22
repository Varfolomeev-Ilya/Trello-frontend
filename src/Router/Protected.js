import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (props.isAuthentificated) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/sign-up' />;
        }
      }}
    />
  );
};


const mapStateToProps = (state) => ({
  isAuthentificated: state.checkAuth.isAuthentificated,
});

export default connect(mapStateToProps)(ProtectedRoute);