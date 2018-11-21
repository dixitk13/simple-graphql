import React from "react";
import { Route, Redirect } from "react-router-dom";

// simple HOC for protecting route
const ProtectRoute = ({ flag, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      flag ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default ProtectRoute;
