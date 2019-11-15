import React, {Component, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {MovizCard } from 'components';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Grid,
} from '@material-ui/core';


const useStyles = theme => ({
  root: {
  },
  content: {
    padding: 0
  },
  inner: {
    backgroundColor: theme.palette.secondary.main,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'flex-start',

  },
  avatar: {
    marginRight: theme.spacing(2),
    width: '150px',
    height: 'auto',
    borderRadius: '30%',
    transition: '.5s all',
    '&:hover': {
      height: 'auto',
      width: '100%',
      flexGrow: '1',
      borderRadius: '0',
    }
  },
  grid: {
    display: 'flex',
    flexFlow:'column wrap',
    alignItems: 'center',
    justifyContent:'center',
    padding: '20px 10px 10px 10px',
    borderBottom: '1px solid white',
    '&:hover':{
      // backgroundColor:theme.palette.primary.light,
      backgroundColor:'#0A5FED',
    },
  },
  title:{
    color: theme.palette.primary.light,
  },
  actions: {
    justifyContent: 'flex-end'
  },
});

class UsersTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      moviesPerPage: 8,
      currentMovies: this.props.movies,
    }
  }

  componentDidMount(){
    const nbMoviesPerPage = this.state.moviesPerPage;
    if (nbMoviesPerPage >= this.props.movies.length)
      this.setState({
                moviesPerPage: nbMoviesPerPage,
                page: 0,
                currentMovies: this.props.movies.slice(0, this.props.movies.length),
              });
    else
      this.setState({
                moviesPerPage: nbMoviesPerPage,
                page: 0,
                currentMovies: this.props.movies.slice(0, nbMoviesPerPage),
              });
  }
  handlePageChange = (event, page) => {
    // when click on the arrows
    const indexStartMoviesCurrentPage = this.state.moviesPerPage * page;
    const indexEndMoviesCurrentPage = indexStartMoviesCurrentPage + this.state.moviesPerPage;
    if (indexEndMoviesCurrentPage >= this.props.movies.length)
      this.setState({
        page: page,
        currentMovies: this.props.movies.slice(indexStartMoviesCurrentPage, this.props.movies.length)
      });
    else
      this.setState({
        page: page,
        currentMovies: this.props.movies.slice(indexStartMoviesCurrentPage, indexEndMoviesCurrentPage)
      });

  };

  handleRowsPerPageChange = event => {
    // when clicking on the number of movies per page
    const nbMoviesPerPage = event.target.value;
    if (nbMoviesPerPage >= this.props.movies.length)
      this.setState({
                moviesPerPage: nbMoviesPerPage,
                page: 0,
                currentMovies: this.props.movies.slice(0, this.props.movies.length),
              });
    else
      this.setState({
                moviesPerPage: nbMoviesPerPage,
                page: 0,
                currentMovies: this.props.movies.slice(0, nbMoviesPerPage),
              });
  };
  render() {

    const { className, classes, ...rest } = this.props;
    let movies = [];
    if (this.state.moviesPerPage >= this.props.movies.length)
      movies = this.props.movies;
    else
      movies = this.state.currentMovies;
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Grid
          container
          className={classes.inner}

          >
          {movies.map(movie => (
          <Grid
            item
            key={movie.id}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className={classes.grid}
            >
                <img

                  alt="Product"
                  src={movie.imageUrl}
                  className={classes.avatar}
                />
              <Typography
                align="center"
                variant="h3"
                gutterBottom
                className={classes.title}
              >
                {movie.title}
              </Typography>
            </Grid>
          ))}
          </Grid>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={this.props.movies.length}
            onChangePage={this.handlePageChange}
            onChangeRowsPerPage={this.handleRowsPerPageChange}
            page={this.state.page}
            rowsPerPage={this.state.moviesPerPage}
            rowsPerPageOptions={[8, 12, 24]}
            labelRowsPerPage="Movies Per Page"
          />
        </CardActions>
      </Card>
    );
  };
}


export default withStyles(useStyles)(UsersTable);
