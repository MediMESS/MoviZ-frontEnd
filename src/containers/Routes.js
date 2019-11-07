import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from 'components';
import { Main as MainLayout, Minimal as MinimalLayout } from 'layouts';

import {
  Dashboard as DashboardView,
  UserList as UserListView,
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
        onProfileStatusChange={props.onProfileStatusChange}
        from="/"
        to="/signIn"
      />
      <Route
        path="/signIn">
        <SignInView />
      </Route>
      <Route
        path="/register">
        <RegisterView />
      </Route>
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/users"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/products"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        onProfileStatusChange={props.onProfileStatusChange}
        path="/settings"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        onProfileStatusChange={props.onProfileStatusChange}
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect
        to="/not-found"
        onProfileStatusChange={props.onProfileStatusChange}
      />
    </Switch>
  );
};

export default Routes;
