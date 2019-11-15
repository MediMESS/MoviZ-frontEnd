import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import {Typography, Grid, Button} from '@material-ui/core';
import { UsersToolbar, UsersTable } from './components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import {MovizCard} from 'components';
import {SearchToolbar} from 'components';
import {Dashboard} from 'views';
import clsx from 'clsx';
import {data} from 'views/Dashboard/data';
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
  },
  gridLikes: {
    height:'75vh',
  },
  likes: {
    fontFamily: 'SEGA LOGO FONT',
    textAlign: 'center',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
  },
});


class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRef : '',
      scrolling: true,
      likedMovies: data,
      recommendedMovies: data,
    }
    this.refMovizLiked = React.createRef();
    this.refRecommendation = React.createRef();
  }
  componentDidMount(){
    window.addEventListener('scroll', this.focusRef);
    if(this.state.scrolling && this.state.currentRef === '' ){
      if(window.scrollY !== 0)
        window.scrollTo({left : '0', top: '0', behavior:'smooth'});
      else
        this.setState({currentRef: 'recommendation', scrolling: false});
    };

  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.focusRef);
  }

  focusRef =  () => {
    const offsetTopMovizLiked = this.refMovizLiked.current.offsetTop - this.refRecommendation.current.offsetTop
    // scrolling from recommendation to liked
    if(!this.state.scrolling && this.state.currentRef === 'recommendation' &&
      window.scrollY > 0 && window.scrollY < offsetTopMovizLiked){
      this.setState({scrolling: true});
      window.scrollTo({left : '0', top: offsetTopMovizLiked, behavior:'smooth'});
      return;
    }
    // we arrived to liked we have to update state
    if(this.state.scrolling && this.state.currentRef === 'recommendation' &&
      window.scrollY >= offsetTopMovizLiked){
      this.setState({currentRef:'liked', scrolling: false});
      return;
    }

    // scrolling from liked to recommendation
    if(!this.state.scrolling && this.state.currentRef === 'liked' && window.scrollY < offsetTopMovizLiked ){
      this.setState({scrolling: true});
      window.scrollTo({left : '0', top: '0', behavior:'smooth'});
      return;
    }
    // we arrived to recommendation we have to update state
    if(this.state.scrolling && this.state.currentRef === 'liked' && window.scrollY === 0){
      this.setState({currentRef:'recommendation', scrolling: false});
      return;
    }
}

  getSuggestions = value => {
  if(value === ""){
    this.setState({likedMovies: data})
    return data;
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
  const likedMoviesSearching = data.filter(d=>{
      return d.title.toLowerCase().includes(value.toLowerCase())
    });
  this.setState({likedMovies: likedMoviesSearching});
  }
  render (){
    const {classes} = this.props;
    const products = data;

    return (
      <div className={classes.root} >
        <div ref={this.refRecommendation}>
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

      <div style={{marginTop: '25px'}} ref={this.refMovizLiked}>
        <Typography
          gutterBottom
          variant="h1"
          className={classes.likes}
        >
          {"MoviZ LIKED"}
        </Typography>

        <SearchToolbar
          getSuggestions={this.getSuggestions}
          options={[]}/>
        </div>
          <UsersTable movies={this.state.likedMovies}/>
    </div>

    );
  }
}
export default withStyles(useStyles)(Recommendation);
