import React, { useState, useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingPage from '../../components/utils/LoadingPage';

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const store = useSelector((store) => store);

  useEffect(() => {
    setIsAuthenticated(store?.adminReducer?.isAuthenticated || false);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading, store]);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Route
          {...rest}
          component={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to='/admin' />
          }
        />
      )}
    </Fragment>
  );
};

export default PrivateAdminRoute;
