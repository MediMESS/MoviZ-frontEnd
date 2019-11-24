import React, { Component } from 'react';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import 'common/Signed.css';
import {MovizCard } from 'components';
import {SearchToolbar} from 'components';
import {data} from './data';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  paper: {
    transition: '.2s transform',
    '&:hover':{
      cursor: 'pointer',
      transform: 'scale(1.06)',
    }
  }
});

const options = [
  'Genre',
  'movie',
  'tvSeries'
];

class Moviz extends Component {


  constructor(props){
    super(props);
    this.state = {
      searchInput: '',
      movies: data,
      genre: 'genre'
    };
  }
  componentDidMount(){
    this.props.onUserChange({
      id: 5,
      name: "a",
      last_name: null,
      email: "a",
      joined: "2019-11-06T14:38:40.952Z"
    });
  }
  updateGenre = (value) => {
    console.log(value);
    this.setState({genre: value})
  }
  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    if(value === ""){
      this.setState({movies: data})
      return data
    }
    // fetch('http://localhost:4000/searchMoviz', {
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

  onSubmit = (input) => {
    if(input === "" || this.state.genre === "genre"){
      return;
    }
    console.log(this.state);
    fetch('http://localhost:4000/searchMoviz', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: input,
        genre: this.state.genre
      })
    })
    .then(prom => prom.json())
    .then(movies => {
      if(movies)
      {
        this.setState({movies: movies})
      }
      else {
        this.setState({
          movies: [],
        })
      }
    })
  }

  render() {
    const {classes} = this.props;
    // console.log("THIS PROPS", this.props);

    return (
      <div className={classes.root}>
        <SearchToolbar
          getSuggestions={this.getSuggestions}
          options={options}
          onSubmit={this.onSubmit}
          genre = {this.state.genre}
          updateGenre = {this.updateGenre}
          />
        <div className={classes.content}>
          <Grid
            container
            spacing={3}
          >
            {this.state.movies.map(movie => (
              <Grid
                item
                key={movie.id}
                lg={4}
                md={4}
                sm={6}
                xs={12}
                className={classes.paper}
              >
                <MovizCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.pagination}>
          <Typography variant="caption">1-6 of 20</Typography>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Moviz)
