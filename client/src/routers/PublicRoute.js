import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// we need userType and isAuthenticated here from redux store
//  to find on which route user be redirect if it is already logged in.

const PublicRoute = ({
  // isAuthenticated,
  component: Component,
  userType,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      true ? <Redirect to={`/${userType}/`} /> : <Component {...props} />
    }
  />
);

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

export default PublicRoute;
