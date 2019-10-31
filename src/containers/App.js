import React, {Component} from 'react';
import './App.css';
import Slogan from '../components/slogan/Slogan';
import NavigationUnSigned from '../components/navigation/NavigationUnSigned';
import SignIn from '../components/signIn/SignIn';
import Register from '../components/register/Register';
import DialogMustSignIn from '../components/dialogs/DialogMustSignIn';

import './navigation-home.css'

class App extends Component  {
  constructor(){
    super();
    this.state =
    {
      profileStatus: 'unSigned',
      unSigned: {
        unSignedPageState:'signIn',
        openBlogDialog: false
      }
    }
    this.onUnsignedOpenBlog = this.onUnsignedOpenBlog.bind(this);
  }

  onUnsignedOpenBlog = (open) => {
    this.setState(prevState =>
      ({
        ...prevState.profileStatus,
        unSigned:{
          ...prevState.unSigned,
          openBlogDialog: open
        }
      })
    )
  }
  onUnSignedPageStateChange = (state) => {
    this.setState(prevState => ({
        ...prevState.profileStatus,
        unSigned:{
          ...prevState.unSigned,
          unSignedPageState: state
        }
    })
  );
    if(state == 'blog')
      this.onUnsignedOpenBlog(true)
  }
  onProfileStatusChange = (status) => {
    this.setState(prevState =>
      ({
        profileStatus:status,
        ...prevState.unSigned
      })
    )
  }
  render() {
    return (
        <div>
          <div className="navigation-home">
          {console.log(this.state.unSigned.unSignedPageState)}
          {
              this.state.profileStatus === 'unSigned'
              ?(<div>
                  <NavigationUnSigned
                    unSignedPageState={this.state.unSigned.unSignedPageState}
                    onUnSignedPageStateChange={this.onUnSignedPageStateChange}
                    onUnsignedOpenBlog = {this.onUnsignedOpenBlog}/>
                  {
                  (this.state.unSigned.unSignedPageState !== 'about')
                  ?(<div>
                      <Slogan />
                      {
                        this.state.unSigned.unSignedPageState === 'signIn' || this.state.unSigned.unSignedPageState === 'blog'
                        ?(<div>
                            <SignIn onProfileStatusChange={this.onProfileStatusChange}/>
                            {
                              this.state.unSigned.unSignedPageState === 'blog'
                                ?(<DialogMustSignIn
                                  open={this.state.unSigned.openBlogDialog}
                                  onUnsignedOpenBlog = {this.onUnsignedOpenBlog}
                                  />)
                                :<div></div>
                            }
                          </div>)
                        : <Register onProfileStatusChange={this.onProfileStatusChange}/>
                      }
                    </div>)
                  :(<h1>ABOUT</h1>)
                }
                </div>)
              :<h1>SIGNED INNNN</h1>
          }
          </div>
        </div>
    );
  }
}

export default App;
