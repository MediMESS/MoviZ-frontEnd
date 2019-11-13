import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from 'components';
import { Main as MainLayout, Minimal as MinimalLayout } from 'layouts';

import {
  Dashboard as DashboardView,
  Recommendation as RecommendationView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
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
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={RecommendationView}
        exact
        layout={MainLayout}
        path="/recommendation"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
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
