import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(0, 0, 0, 1)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      height: '60px',
      textAlign: 'left',
    },
    title_inside:{
      fontSize:'30px',
      alignItems: 'center',
      textTransform: 'Capitalize'
    },
    blue : {
      backgroundColor: '#1769aa'
    }
  }),
);
const Navigation = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar color="error" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            <Button className={`${classes.blue} ${classes.title_inside}`}>
              <MovieIcon style={{fontSize: '30px', marginRight:'5px'}}/>
                Movi<span style={{fontSize:'30px'}}>Z</span>
            </Button>
          </Typography>
          <IconButton className={classes.blue} style={{marginRight:'20px'}}>
            <InfoIcon/>
          </IconButton>
          <IconButton className={classes.blue}  style={{marginRight:'20px'}}>
            <ForumIcon />
          </IconButton>
          <IconButton className={classes.blue} style={{marginRight:'20px'}}>
            <LockIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
