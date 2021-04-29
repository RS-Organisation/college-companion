import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  // isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      true ? <Component {...props} /> : <Redirect to='/' />
    }
  />
);

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

export default PrivateRoute;
