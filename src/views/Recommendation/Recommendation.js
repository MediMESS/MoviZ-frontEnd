import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {Typography, Grid, Button} from '@material-ui/core';
import { UsersToolbar } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import {MovizCard} from 'components';
import {SearchToolbar} from 'components';
import clsx from 'clsx';
import {data} from 'views/Moviz/data';
import users from './data';



const useStyles = theme => ({
  root: {
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  paper: {
    transition: '.3s transform',
    margin: '0 10px',
    '&:hover':{
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
  },
  gridContainer: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
  },
  gridRecommendation:{
    height: '85vh',
  },
  recommendation: {
    margin: '5px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SEGA LOGO FONT',
  }
});


class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedMovies: data,
    }
  }

  render (){
    const {classes} = this.props;
    const products = data;

    return (
      <div className={classes.root} >
        <div>
          <Typography
            gutterBottom
            variant="h1"
            className={classes.recommendation}
          >
            RECOMMENDATION
          </Typography>
        </div>
        <div
          className={clsx(classes.gridContainer, classes.gridRecommendation)}
        >
          {this.state.recommendedMovies.map(recommendedMovie => (
            <div className={classes.paper}>
              <MovizCard movie={recommendedMovie} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Recommendation);
