import React, {Component} from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout, RouteUnSigned } from 'components';
import { Main as MainLayout,  Minimal as MinimalLayout } from 'layouts';

import {
  Moviz as MovizView,
  Recommendation as RecommendationView,
  Liked as LikedView,
  Account as AccountView,
  NotFound as NotFoundView,
  SignIn as SignInView,
  Register as RegisterView,
} from 'views';

const initialState = {};
class Routes extends Component{
  constructor(props){
    super(props);
    this.state={
      user: {},
    }
  }

  onSignedIn = (userSignedInfos) => {
    this.setState({user: userSignedInfos});
  }
  onUserChange = (userSignedInfos) => {
    this.setState({user: userSignedInfos});
  }
  onSignOut = () => {
    this.setState({user: {} });
  }
  render() {
    // if(!Object.keys(this.state.user).length)
    //   {
    //     return (
    //       <Switch>
    //         <Redirect
    //           exact
    //           from="/"
    //           to="/signIn"
    //         />
    //         <RouteUnSigned
    //           component={SignInView}
    //           exact
    //           onSignedIn = {this.onSignedIn}
    //           path="/signIn"
    //         />
    //         <RouteUnSigned
    //           component={RegisterView}
    //           exact
    //           onSignedIn = {this.onSignedIn}
    //           path="/register"
    //         />
    //         <Redirect
    //           to="/signIn" />
    //       </Switch>
    //       )
    //   }
    // else
      const userProfile = {
        id: 5,
        first_name: "Mehdi",
        last_name: "Messarat",
        email: "mehdimessarat@outlook.fr",
        joined: "2019-11-06T14:38:40.952Z",
        country: 'Algeria',
        city: 'Algiers',
        avatar: '/images/avatars/charmandar.png'
      };
      return (
        <Switch>
          <Redirect
            exact
            from="/"
            to="/signIn"
          />
          <RouteUnSigned
            component={SignInView}
            exact
            onSignedIn = {this.onSignedIn}
            path="/signIn"
          />
          <RouteUnSigned
            component={RegisterView}
            exact
            onSignedIn = {this.onSignedIn}
            path="/register"
          />
          <RouteWithLayout
            component={MovizView}
            user={userProfile}
            onUserChange={this.onUserChange}
            onSignOut = {this.onSignOut}
            exact
            layout={MainLayout}
            path="/moviz"
          />
          <RouteWithLayout
            component={RecommendationView}
            exact
            onUserChange={this.onUserChange}
            onSignOut = {this.onSignOut}
            user={userProfile}
            layout={MainLayout}
            path="/recommendation"
          />
          <RouteWithLayout
            onSignOut = {this.onSignOut}
            onUserChange={this.onUserChange}
            component={LikedView}
            exact
            user={userProfile}
            layout={MainLayout}
            path="/liked"
          />
          <RouteWithLayout
            component={AccountView}
            onUserChange={this.onUserChange}
            onSignOut = {this.onSignOut}
            exact
            user={userProfile}
            layout={MainLayout}
            path="/account"
          />
          <RouteWithLayout
            component={NotFoundView}
            onUserChange={this.onUserChange}
            onSignOut = {this.onSignOut}
            exact
            user={userProfile}
            layout={MinimalLayout}
            path="/not-found"
          />
          <Redirect
            to="/not-found"
          />
        </Switch>
      );
  }
}

export default Routes;
