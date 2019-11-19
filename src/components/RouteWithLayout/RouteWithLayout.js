import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  // console.log("Route with Layout", props);
  const { layout: Layout, user, onUserChange, onSignOut, component: Component, ...rest } = props;
    return (
      <Route
      {...rest}
      render={matchProps => (
        <Layout >
        <Component {...matchProps}
        user={user}
        onSignOut={onSignOut}
        onUserChange = {onUserChange}/>
        </Layout>
      )}
      />
    );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
