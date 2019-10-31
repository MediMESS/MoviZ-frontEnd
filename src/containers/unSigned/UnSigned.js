import React, {Component} from 'react';
import Slogan from '../../components/unSigned/Slogan';
import NavigationUnSigned from '../../components/unSigned/NavigationUnSigned';
import SignIn from '../../components/unSigned/SignIn';
import Register from '../../components/unSigned/Register';
import DialogMustSignIn from '../../components/unSigned/DialogMustSignIn';

// import Slogan from '../../components/unSigned/slogan/Slogan';
// import NavigationUnSigned from '../../components/unSigned/navigation/NavigationUnSigned';
// import SignIn from '../../components/unSigned/signIn/SignIn';
// import Register from '../../components/unSigned/register/Register';
// import DialogMustSignIn from '../../components/unSigned/dialogs/DialogMustSignIn';
import './UnSigned.css'


class UnSigned extends Component  {
  constructor(props){
    super(props);
    this.state =
    {
        unSignedPageState:'signIn',
        openBlogDialog: false
    }
  }

  onUnsignedOpenBlog = (open) => {
    this.setState(prevState =>
      ({
        ...prevState.unSigned,
        openBlogDialog: open
      })
    )
  }
  onUnSignedPageStateChange = (state) => {
    this.setState(prevState => ({
          ...prevState.unSigned,
          unSignedPageState: state
      })
    );
    if(state == 'blog')
      this.onUnsignedOpenBlog(true)
  }

  render() {
    const {onProfileStatusChange} = this.props;
    return (
      <div>
          <NavigationUnSigned
            unSignedPageState={this.state.unSignedPageState}
            onUnSignedPageStateChange={this.onUnSignedPageStateChange}
            onUnsignedOpenBlog = {this.onUnsignedOpenBlog}/>
          {
            (this.state.unSignedPageState !== 'about')
            ?(<div>
                <Slogan />
                {
                  this.state.unSignedPageState === 'signIn' || this.state.unSignedPageState === 'blog'
                  ?(<div>
                      <SignIn
                        onProfileStatusChange={onProfileStatusChange}
                        onUnSignedPageStateChange={this.onUnSignedPageStateChange}/>
                      {
                        this.state.unSignedPageState === 'blog'
                          ?(<DialogMustSignIn
                            open={this.state.openBlogDialog}
                            onUnsignedOpenBlog = {this.onUnsignedOpenBlog}
                            />)
                          :<div></div>
                      }
                    </div>)
                  : <Register
                      onProfileStatusChange={onProfileStatusChange}
                      onUnSignedPageStateChange={this.onUnSignedPageStateChange}/>
                }
              </div>)
            :(<h1>ABOUT</h1>)
          }
        </div>
        );
    }
}

export default UnSigned;
