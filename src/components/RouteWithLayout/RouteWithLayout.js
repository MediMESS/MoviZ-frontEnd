import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = props => {
  const { layout: Layout, onProfileStatusChange, component: Component, ...rest } = props;
  console.log(onProfileStatusChange);
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout onProfileStatusChange={onProfileStatusChange}>
            <Component {...matchProps} />
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
