import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, redirectPath, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: redirectPath, state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
