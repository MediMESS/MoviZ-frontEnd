import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinkMaterialUi from "@material-ui/core/Link";
import { Link as LinkRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "common/UnSigned.css";
import validate from "validate.js";
import { Slogan, NavigationUnSigned } from "components";

function Copyright() {
  return (
    <Typography variant="body1" style={{ color: "black" }} align="center">
      {"Created By "}
      <LinkMaterialUi
        color="primary"
        href="https://github.com/MediMESS"
        style={{ fontWeight: 800 }}
      >
        Mehdi Messarat
      </LinkMaterialUi>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(1, 0)
  },
  gridField: {
    display: "flex",
    flexFlow: "column nowrap"
  },
  errorStyle: {
    color: "red",
    fontSize: "15px",
    paddingTop: "5px"
  }
});

var constraints = {
  e_mail: {
    email: {
      message: "%{value} is not valid"
    }
  },
  password: {
    length: {
      minimum: 6,
      maximum: 12,
      message: "must be 6 to 15 characters"
    }
  },
  firstName: {
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "must be characters"
    }
  },
  lastName: {
    format: {
      pattern: "[a-z]+",
      flags: "i",
      message: "must be characters"
    }
  }
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        favorite_movie: "",
        email: "",
        password: "",
        checkBoxChecked: false
      },
      error: {
        registerError: false,
        first_name: "",
        last_name: "",
        favorite_movie: "",
        email: "",
        password: "",
        checkBox: ""
      }
    };
  }
  onFirstNameChange = event => {
    const first_name = event.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        first_name: first_name
      },
      ...prevState.error
    }));
  };
  onLastNameChange = event => {
    const last_name = event.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        last_name: last_name
      },
      ...prevState.error
    }));
  };
  onFavoriteMovieChange = event => {
    const favorite_movie = event.target.value;

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        favorite_movie: favorite_movie
      },
      ...prevState.error
    }));
  };
  onEmailChange = event => {
    const emailInput = event.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        email: emailInput
      },
      ...prevState.error
    }));
  };
  onPasswordChange = event => {
    const password = event.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        password: password
      },
      ...prevState.error
    }));
  };
  onCheckBoxChange = event => {
    const checked = event.target.checked;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        checkBoxChecked: checked
      },
      ...prevState.error
    }));
  };

  validateForm = () => {
    let valide = true;
    let emailError =
      validate({ e_mail: this.state.user.email }, constraints) || "";
    let passwordError =
      validate({ password: this.state.user.password }, constraints) || "";
    let firstNameError =
      validate({ firstName: this.state.user.first_name }, constraints) || "";
    let lastNameError =
      validate({ lastName: this.state.user.last_name }, constraints) || "";
    let favoriteMovieError = "";
    let checkBoxCheckedError = "";

    // email
    if (validate.isEmpty(this.state.user.email)) {
      emailError = "Email Is Empty!";
    } else if (!validate.isEmpty(emailError)) {
      emailError = emailError.e_mail[0];
    }
    if (!validate.isEmpty(emailError)) {
      valide = false;
    }

    // password
    if (validate.isEmpty(this.state.user.password)) {
      passwordError = "Password Is Empty!";
    } else if (!validate.isEmpty(passwordError)) {
      passwordError = passwordError.password[0];
    }

    if (!validate.isEmpty(passwordError)) {
      valide = false;
    }

    // firstName
    if (validate.isEmpty(this.state.user.first_name)) {
      firstNameError = "firstName Is Empty!";
    } else if (!validate.isEmpty(firstNameError)) {
      firstNameError = firstNameError.firstName[0];
    }

    if (!validate.isEmpty(firstNameError)) {
      valide = false;
    }

    // lastName
    if (validate.isEmpty(this.state.user.last_name)) {
      lastNameError = "lastName Is Empty!";
    } else if (!validate.isEmpty(lastNameError)) {
      lastNameError = lastNameError.lastName[0];
    }

    if (!validate.isEmpty(lastNameError)) {
      valide = false;
    }

    // favorite_movie
    if (validate.isEmpty(this.state.user.favorite_movie)) {
      favoriteMovieError = "favourite Movie Is Empty!";
      valide = false;
    }

    // checked Policy
    if (!this.state.checkBoxChecked) {
      checkBoxCheckedError = "You Must Agree by checking to Sign Up!";
      valide = false;
    }

    this.setState(prevState => ({
      error: {
        email: emailError,
        last_name: lastNameError,
        favorite_movie: favoriteMovieError,
        checkBox: checkBoxCheckedError,
        first_name: firstNameError,
        password: passwordError
      },
      ...prevState.user
    }));
    // console.log(errorMsg.emailValidate[0]);
    return valide;
  };

  onRegister = () => {
    // fetch('https://moviz-app.herokuapp.com/register', {
    if (!this.validateForm()) {
      this.setState(prevState => ({
        error: {
          ...prevState.error,
          registerError: true
        },
        ...prevState.user
      }));
      return;
    }
    // fetch('https://moviz-backend.herokuapp.com/', {
    fetch("https://moviz-backend.herokuapp.com/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        favorite_movie: this.state.favorite_movie,
        url_profile_picture: "/images/avatars/charmandar.png",
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          console.log(user);
          this.props.onSignedIn(user);
          this.props.history.push("/moviz");
        } else {
          console.log("NO SIGNED UP");
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              registerError: true
            },
            ...prevState.user
          }));
        }
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="unSigned">
        <NavigationUnSigned />
        <Slogan />
        <Container
          component="main"
          maxWidth="xs"
          style={{ backgroundColor: "white" }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            {this.state.error.registerError ? (
              <h2 style={{ color: "red", margin: "20px 0 0 0" }}>
                Unable to register! Please fill the form with correct
                information.
              </h2>
            ) : (
              <div></div>
            )}
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item className={classes.gridField} xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="first_name"
                    variant="outlined"
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    onChange={this.onFirstNameChange}
                    autoFocus
                  />
                  <div className={classes.errorStyle}>
                    {this.state.error.first_name}
                  </div>
                </Grid>
                <Grid item className={classes.gridField} xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="lname"
                    onChange={this.onLastNameChange}
                  />
                  <div className={classes.errorStyle}>
                    {this.state.error.last_name}
                  </div>
                </Grid>
                <Grid item className={classes.gridField} xs={12}>
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
                  <div className={classes.errorStyle}>
                    {this.state.error.email}
                  </div>
                </Grid>
                <Grid item className={classes.gridField} xs={12}>
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
                  <div className={classes.errorStyle}>
                    {this.state.error.password}
                  </div>
                </Grid>
                <Grid item className={classes.gridField} xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="favouriteMovie"
                    label="What's your favourite movie ?"
                    type="favouriteMovie"
                    id="favouriteMovie"
                    autoComplete="fav-movie"
                    onChange={this.onFavoriteMovieChange}
                  />
                  <div className={classes.errorStyle}>
                    {this.state.error.favorite_movie}
                  </div>
                </Grid>
                <Grid item xs={12} style={{ display: "flex" }} display="flex">
                  <Checkbox
                    style={{ padding: "5px" }}
                    color="primary"
                    onChange={this.onCheckBoxChange}
                  />
                  <Typography style={{ color: "black", alignSelf: "center" }}>
                    {"By Checking. I agree to confirm "}
                    <LinkMaterialUi
                      color="primary"
                      href="https://policies.google.com/terms?hl=en-US"
                      style={{ fontWeight: 800 }}
                    >
                      Moviz Policy
                    </LinkMaterialUi>{" "}
                  </Typography>
                </Grid>
                <div
                  style={{ textAlign: "center", width: "100%" }}
                  className={classes.errorStyle}
                >
                  {this.state.error.checkBox}
                </div>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onRegister}
                href="#"
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item className={classes.gridField}>
                  <LinkRouter
                    to="/signIn"
                    variant="body2"
                    style={{ cursor: "pointer" }}
                  >
                    Already have an account? Sign in
                  </LinkRouter>
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
