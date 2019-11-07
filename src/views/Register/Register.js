import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'common/UnSigned.css';
import {
  NavigationUnSigned,
  Slogan
} from 'components';

function Copyright() {
  return (
    <Typography variant="body1" style={{color:'black'}} align="center">
      {'Created By '}
      <Link color="primary" href="https://github.com/MediMESS" style={{fontWeight: 800}}>
        Mehdi Messarat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0),
  },
});

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      password: '',
      registerError: false
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onRegister = () => {
    // fetch('https://moviz-app.herokuapp.com/register', {
    fetch('http://localhost:4000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user=>{
        if(user.id){
          this.props.onProfileStatusChange('signed');
        }
        else
          this.setState({registerError: true});
      })

  }
  render() {
    const {classes} = this.props;
    return (
      <div className="unSigned">
        <NavigationUnSigned />
        <Slogan />
        <Container component="main" maxWidth="xs" style={{backgroundColor:"white"}}>
          <CssBaseline />
          <div className={classes.paper}>
          {
            this.state.registerError ?
            <h2 style={{color:'red', marginBottom:'0'}}>Unable to register! Please fill the form with correct information.</h2>
            :<div></div>
          }
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={this.onNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.onEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onPasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="favouriteMovie"
                    label="What's your favourite movie ?"
                    type="favouriteMovie"
                    id="favouriteMovie"
                    autoComplete="fav-movie"
                  />
                </Grid>
                <Grid item xs={12} style={{display:'flex'}} display="flex">
                  <Checkbox style={{padding:'5px'}} color="primary" />
                  <Typography style={{color:'black', alignSelf:'center'}}>
                    {'By Checking. I agree to confirm '}
                    <Link color="primary" href="https://policies.google.com/terms?hl=en-US" style={{fontWeight: 800}}>
                      Moviz Policy
                    </Link>{' '}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onRegister}
                href="/dashboard"
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    style={{cursor:'pointer'}}
                    href="/register">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box py={1}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(styles)(SignUp);
