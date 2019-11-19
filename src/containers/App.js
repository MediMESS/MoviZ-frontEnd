import React, {Component} from 'react';
import {Redirect, Router} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate-js';
import 'common/Signed.css';
import validators from 'common/validators';
import 'react-perfect-scrollbar/dist/css/styles.css';
import theme from 'theme';

// import {connect} from 'react-redux';
import Routes from './Routes';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const initialState = {};
class App extends Component  {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router
          history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
// export default connect(mapStateToProps, mapDispatchStateToProps)(App);
export default App;
