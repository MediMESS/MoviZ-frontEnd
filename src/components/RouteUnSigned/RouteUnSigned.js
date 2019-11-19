import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteUnSigned = props => {
  const { onSignedIn, component: Component, ...rest } = props;
    return (
      <Route
      {...rest}
      render={matchProps => (
          <Component {...matchProps}
            onSignedIn={onSignedIn}
          />
        )}
      />
  );
};

RouteUnSigned.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteUnSigned;
