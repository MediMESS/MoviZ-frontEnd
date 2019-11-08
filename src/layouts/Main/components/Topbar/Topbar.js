import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    height: '60px',
    textAlign: 'left',
  },
  title_inside:{
    fontSize:'30px',
    alignItems: 'center',
    textTransform: 'Capitalize',
    color:'white'
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, onProfileStatusChange, ...rest } = props;
  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/dashboard">
        <Typography  variant="h6" className={classes.title} >
          <Button className={`${classes.blue} ${classes.title_inside}`}>
            <MovieIcon style={{fontSize: '30px', marginRight:'5px'}}/>
              Movi<span style={{fontSize:'30px'}}>Z</span>
          </Button>
        </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            onClick={() => {onProfileStatusChange('unSigned')}}
            href="/signIn"
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            onClick={() => {onProfileStatusChange('unSigned')}}
            href="/signIn"
            color="inherit"
          >
            <InputIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
