import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';

import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = theme => ({
  root: {
  },
  imageContainer: {
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width:'500px',
    height: '500px',
  },
  title:{
    fontSize: '25px',
    fontWeight:'700',
    margin:'10px 0',
    width: '100%',
    color:theme.palette.text.primary,
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  iconButton: {
    color: theme.palette.icon,
    padding: 0,
  },
  heartIcon: {
    color: theme.palette.primary.main,
    marginRight: '10px',
  },
  toolTipPopper:{
    width: '60px',
    height: '60px',
  },
  UnliketoolTipPopper:{
    width: '80px',
    height: '60px',
  },
  toolTip:{
    fontSize:'20px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  }
});


class MovizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.movie.rating,
      like: this.props.movie.like || false
    }
    this.loadMovies();
  }

  loadMovies = () => {
    // getRating
    if(this.props.movie.rating==="None"){
      fetch(`http://localhost:4000/getRating/${this.props.movie.id}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
          })
          .then(prom => prom.json())
          .then(rating => {
            console.log(rating);
            this.setState({rating: rating})
          })
          .catch(err=> console.log(err));
      }
      fetch(`http://localhost:4000/getLike/${this.props.movie.id}`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
      .then(prom => prom.json())
      .then(like => {
        if(like.length){
          this.setState({like: like});
        }
      })
      .catch(err=> console.log);

}

  updateLike = (movie) => {
    const infoMovie = {
      id: movie.id,
      id_user: this.props.user.id,
      title: movie.title,
      year: movie.year,
      rating: this.state.rating,
      url_picture: movie.url_picture,
      state: "liked"
    };

    if(this.state.like === false){
      fetch("http://localhost:4000/insertMovie",{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          movie: infoMovie
        })
      })
      .then(prom => prom.json())
      .then(resultMovie => {
        if(resultMovie.id)
        {
          this.setState({like: true});
        }
      });
    }
    else {
      fetch(`http://localhost:4000/deleteMovie/${infoMovie.id}`,{
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          movieId: infoMovie.id
        })
      })
      .then(prom => prom.json())
      .then(resultMovie => {
        if(resultMovie.id)
        {
          this.setState({like: false});
        }
      });
    }

  }

  render(){
    const { className, classes, movie, ...rest } = this.props;

    return (
      <Card
        {...rest}
      >
        <CardContent
          style={{paddingBottom: '0'}}
          className={classes.root}
        >
          <div className={classes.imageContainer}>
            <img

              alt="Product"
              src={movie.url_picture}
              height="500"
            />
          </div>
          <Typography
            align="center"
            gutterBottom
            className={classes.title}
          >
            {movie.title}
          </Typography>

        <Divider />
        <CardActions>
          <Grid
            container
            justify="space-between"
          >
            <Grid
              className={classes.statsItem}
              item
            >
              <AccessTimeIcon className={classes.statsIcon} />
              <Typography
                display="inline"
                variant="body1"
                style={{marginRight:'20px'}}
              >
                {this.state.rating}
              </Typography>
              <GetAppIcon className={classes.statsIcon} />
              <Typography
                display="inline"
                variant="body1"
              >
                {movie.year}
              </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
            {this.state.like
            ?<Tooltip classes={{
                  popper: classes.UnliketoolTipPopper,
                  tooltip: classes.toolTip,
                }} title="UnLike" placement="bottom">
                <IconButton
                  className={classes.iconButton}
                  onClick={() => {this.updateLike(this.props.movie)}}
                  >
                    <FavoriteIcon className={classes.heartIcon}/>
                </IconButton>
              </Tooltip>
              :<Tooltip classes={{
                  popper: classes.toolTipPopper,
                  tooltip: classes.toolTip,
                }} title="Like" placement="bottom">
                <IconButton
                  className={classes.iconButton}
                  onClick={() => {this.updateLike(this.props.movie)}}
                  >
                    <FavoriteBorderIcon className={classes.heartIcon}/>
                </IconButton>
              </Tooltip>
            }
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
    );
  };
}
MovizCard.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.object.isRequired
};

export default withStyles(useStyles)(MovizCard);
