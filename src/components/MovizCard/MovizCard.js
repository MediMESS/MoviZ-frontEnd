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
    this.getRating();
  }

  getRating = () => {
    if(this.props.movie.rating==="None"){
      console.log("Hi");
      fetch('http://localhost:4000/getRating', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              movieId: this.props.movie.id
            })
          })
          .then(prom => prom.json())
          .then(rating => {
            console.log("HI getRating");
            if(rating)
            {
              console.log("movie: ",this.props.movie.title, ", rating: ",rating, this.props.movie.id);
              this.setState({rating: rating})
            }
          });
    console.log("update", this.state.movies);
  }
}

  updateLike = (movie) => {
    console.log("UpdateLike");
    this.setState({
      like: !this.state.like
    })
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
              src={movie.imageUrl}
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
                  onClick={() => {this.updateLike()}}
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
                  onClick={() => {this.updateLike()}}
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
