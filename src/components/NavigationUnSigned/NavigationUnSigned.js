import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MovieIcon from "@material-ui/icons/Movie";
import LockIcon from "@material-ui/icons/Lock";
import Tooltip from "@material-ui/core/Tooltip";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      height: "60px",
      textAlign: "left"
    },
    title_inside: {
      fontSize: "30px",
      alignItems: "center",
      textTransform: "Capitalize"
    },
    blue: {
      backgroundColor: "#2196f3"
    }
  })
);
const NavigationUnSigned = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button className={`${classes.blue} ${classes.title_inside}`}>
              <MovieIcon style={{ fontSize: "30px", marginRight: "5px" }} />
              Movi<span style={{ fontSize: "30px" }}>Z</span>
            </Button>
          </Typography>
          <Tooltip
            style={{ fontSize: "500px" }}
            title="Sign In"
            placement="bottom"
          >
            <IconButton
              className={classes.blue}
              style={{ marginRight: "20px" }}
              onClick={() => history.push("/sign In")}
            >
              <LockIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            style={{ fontSize: "500px" }}
            title="Register"
            placement="bottom"
          >
            <IconButton
              className={classes.blue}
              style={{ marginRight: "20px" }}
              onClick={() => history.push("/register")}
            >
              <LockOpenIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationUnSigned;
