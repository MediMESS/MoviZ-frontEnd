import React, {Component} from 'react';
import Slogan from '../../components/unSigned/Slogan';
import NavigationUnSigned from '../../components/unSigned/NavigationUnSigned';
import SignIn from '../../components/unSigned/SignIn';
import Register from '../../components/unSigned/Register';
import DialogMustSignIn from '../../components/unSigned/DialogMustSignIn';
import {connect} from 'react-redux';
import {setUnSignedPageState, setOpenMustSignInDialog} from './UnSignedActions';
import './UnSigned.css';

const mapStateToProps = (state) => {
  return {
    unSignedPageState: state.unSignedPageStateChange.unSignedPageState,
    openMustSignInDialog: state.mustSignInDialogChange.openMustSignInDialog
  }
}

const mapDispatchStateToProps = (dispatch) => {
  return {
    onUnSignedPageStateChange: (current_unsigned_page_state) => {
      if(current_unsigned_page_state === 'blog')
        dispatch(setOpenMustSignInDialog(true));
      dispatch(setUnSignedPageState(current_unsigned_page_state));
    },
    onMustOpenSignInDialogChange: (open) => {
      dispatch(setOpenMustSignInDialog(open))
    }
  };
}

class UnSigned extends Component  {

  render() {
    console.log(this.props);
    const {
      unSignedPageState,
      onProfileStatusChange,
      openMustSignInDialog,
      onUnSignedPageStateChange,
      onMustOpenSignInDialogChange
    } = this.props;

    return (
      <div>
          <NavigationUnSigned
            unSignedPageState={unSignedPageState}
            onUnSignedPageStateChange={onUnSignedPageStateChange}
            onUnsignedOpenBlog = {onMustOpenSignInDialogChange}/>
          {
            (unSignedPageState !== 'about')
            ?(<div>
                <Slogan />
                {
                  unSignedPageState === 'signIn' || unSignedPageState === 'blog'
                  ?(<div>
                      <SignIn
                        onProfileStatusChange={onProfileStatusChange}
                        onUnSignedPageStateChange={onUnSignedPageStateChange}/>
                      {
                        unSignedPageState === 'blog'
                          ?(<DialogMustSignIn
                            open={openMustSignInDialog}
                            onUnsignedOpenBlog = {onMustOpenSignInDialogChange}
                            />)
                          :<div></div>
                      }
                    </div>)
                  : <Register
                      onProfileStatusChange={onProfileStatusChange}
                      onUnSignedPageStateChange={onUnSignedPageStateChange}/>
                }
              </div>)
            :(<h1>ABOUT</h1>)
          }
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(UnSigned);
