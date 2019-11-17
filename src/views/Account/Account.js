import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails, Password } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          style={{paddingBottom:'0'}}
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile />

        </Grid>
        <Grid
          style={{paddingBottom:'0'}}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid>
        <Grid
          style={{padding:'5px'}}
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          <Password />
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
