import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, profileUser, ...rest } = props;

  const classes = useStyles();
  const [values, setValues] = useState({
    avatar: profileUser.avatar || "/images/avatars/charmandar.png",
    urlPicture: ""
  });
  const user = {
    name: profileUser.first_name + " " + profileUser.last_name || "",
    city: profileUser.city || "",
    country: profileUser.country || "",
    joined: profileUser.joined || ""
    // avatar: 'https://pokecharms.com/data/attachment-files/2015/10/236933_Charmander_Picture.png'
  };

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {user.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              Joined: {moment().format("YYYY/MM/DD \\AT hh:mm a")}{" "}
              {user.timezone}
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={values.avatar} />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress value={70} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <TextField
        style={{ marginTop: "20px" }}
        fullWidth
        helperText="Please Specify the URL if you want to change Picture"
        label="URL picture"
        margin="dense"
        name="urlPicture"
        value={values.urlPicture}
        onChange={handleChange}
        variant="outlined"
      />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
          onClick={() => {
            if (values.urlPicture)
              setValues({ ...values, avatar: values.urlPicture });
          }}
        >
          Upload picture
        </Button>
        <Button
          variant="text"
          onClick={() =>
            setValues({
              urlPicture: "",
              avatar: profileUser.avatar || "/images/avatars/charmandar.png"
            })
          }
        >
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
