import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/styles";
import { data } from "views/Moviz/data";
import { SearchToolbar } from "components";
import { Typography } from "@material-ui/core";
import { UsersTable } from "components";

const useStyles = theme => ({
  root: {},
  likes: {
    fontFamily: "SEGA LOGO FONT",
    textAlign: "center",
    margin: "5px",
    color: "white",
    backgroundColor: theme.palette.secondary.main
  }
});

class Liked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedMovies: []
    };
    this.loadLikedMovies();
  }

  loadLikedMovies = () => {
    fetch(`https://moviz-backend.herokuapp.com/getMoviesLiked/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(prom => prom.json())
      .then(movies => {
        this.setState({ likedMovies: movies });
      })
      .catch(err => {
        this.setState({ likedMovies: [] });
      });
  };

  getSuggestions = value => {
    if (value === "") {
      this.setState({ likedMovies: data });
      return data;
    }
    // fetch('https://moviz-backend.herokuapp.com/searchDashboard', {
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
    const likedMoviesSearching = data.filter(d => {
      return d.title.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ likedMovies: likedMoviesSearching });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Typography gutterBottom variant="h1" className={classes.likes}>
            {"MoviZ LIKED"}
          </Typography>

          <SearchToolbar getSuggestions={this.getSuggestions} options={[]} />
        </div>
        <UsersTable movies={this.state.likedMovies} />
      </div>
    );
  }
}

export default withStyles(useStyles)(Liked);
