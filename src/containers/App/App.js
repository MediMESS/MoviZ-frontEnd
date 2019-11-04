import React, {Component} from 'react';
import './App.css';
import UnSigned from '../unSigned/UnSigned';
import {connect} from 'react-redux';
import {setProfileStatus} from './AppActions';

const mapStateToProps = (state) => {
  return {
    profileStatus: state.onProfileStatusChange.profileStatus,
    unSignedPageState: state.unSignedPageStateChange.unSignedPageState
  }
};

const mapDispatchStateToProps = dispatch => {
  return {
    onProfileStatusChange: (status) => {
      return dispatch(setProfileStatus(status));
    }
  }
}
class App extends Component  {

  render() {
    const {profileStatus, onProfileStatusChange, unSignedPageState} = this.props;
    return (
        <div>
          {
              profileStatus === 'unSigned'
              ?<UnSigned onProfileStatusChange={onProfileStatusChange}/>
              :<a href='http://localhost:3000' style={{ fontSize: '100px'}}>you've signed LOG OUT!</a>
          }
        </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchStateToProps)(App);
