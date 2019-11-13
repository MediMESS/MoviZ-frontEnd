import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {Typography, Grid} from '@material-ui/core';
import { UsersToolbar, UsersTable } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import {MovizCard} from 'views/Dashboard/components';
import {SearchToolbar} from 'components';
import {Dashboard} from 'views';
import clsx from 'clsx';
import {data} from 'views/Dashboard/data';
import users from './data';


const options = [
  'Recommendation',
  'Like'
];

const useStyles = makeStyles(theme => ({
  root: {
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  paper: {
    transition: '.5 transform',
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
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.dark,
    // color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SEGA LOGO FONT',

    // border: `2px solid ${theme.palette.primary.main}`,
  },
  gridLikes: {
    height:'75vh',
  },
  likes: {
    fontFamily: 'SEGA LOGO FONT',
    textAlign: 'center',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    // border: `2px solid ${theme.palette.primary.main}`,
  },
}));

const getSuggestions = value => {
  if(value === ""){
    // this.setState({products: data})
    return data
  }
  // fetch('http://localhost:4000/searchDashboard', {
  //   method: 'post',
  //   headers: {'Content-Type':'application/json'},
  //   body: JSON.stringify({
  //     input: value
  //   })
  // })
  //   .then(prom => prom.json())
  //   .then(data => {
  //     console.log(data);
  //     this.setState({products: data});
  //   });

  // this.setState({
  //   products: data.filter(d=>{
  //     return d.title.toLowerCase().includes(value)
  //   })
  // });
  // return this.state.products
  return data.filter(d=>{
      return d.title.toLowerCase().includes(value.toLowerCase() )
    })
}
const Recommendation = () => {
  const classes = useStyles();

  const products = data;

  return (
    <div className={classes.root}>
      <div >
        {window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}
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
        {products.map(product => (
          <div className={classes.paper}>
            <MovizCard product={product} />
          </div>
        ))}
    </div>

    <div >
      {window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}
      <Typography
        gutterBottom
        variant="h1"
        className={classes.likes}
      >
        {"MoviZ LIKED"}
      </Typography>
      <SearchToolbar
      getSuggestions={getSuggestions}
      options={options}/>

      </div>
        <UsersTable users={data}/>
  </div>

  );
};

export default Recommendation;
