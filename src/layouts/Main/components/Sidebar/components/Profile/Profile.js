import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: 150,
      height: 150
    },
    name: {
      marginTop: theme.spacing(1),
    }
}));

const Profile = props => {
  const { className, profileUser, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: profileUser.first_name+' '+profileUser.last_name || '',
    avatar: profileUser.avant || '/images/avatars/charmandar.png',
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h3"

      >
        {user.name}
      </Typography>
      <Typography variant="body2">Moviz Member</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
