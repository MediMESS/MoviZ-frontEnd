import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from 'components';
import { Main as MainLayout, Minimal as MinimalLayout } from 'layouts';

import {
  Moviz as MovizView,
  Recommendation as RecommendationView,
  Liked as LikedView,
  Account as AccountView,
  NotFound as NotFoundView,
  SignIn as SignInView,
  Register as RegisterView
} from 'views';

const Routes = (props) => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/signIn"
      />
      <Route
        path="/signIn"
      >
        <SignInView />
      </Route>
      <Route
        path="/register"
      >
        <RegisterView />
      </Route>
      <RouteWithLayout
        component={MovizView}
        exact
        layout={MainLayout}
        path="/moviz"
      />
      <RouteWithLayout
        component={RecommendationView}
        exact
        layout={MainLayout}
        path="/recommendation"
      />
      <RouteWithLayout
        component={LikedView}
        exact
        layout={MainLayout}
        path="/liked"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect
        to="/not-found"
      />
    </Switch>
  );
};

export default Routes;
