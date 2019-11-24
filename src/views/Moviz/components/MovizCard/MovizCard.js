import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
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

const useStyles = makeStyles(theme => ({
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
    width: '100px',
    height: '100px',
    fontSize: '100px',
  },
  toolTip:{
    fontSize:'40px',
    rippleBackgroundColor: 'blue',
    color: theme.palette.primary.main,
  }
}));

const MovizCard = props => {
  const { className, movie, ...rest } = props;
  console.log(movie);
  const classes = useStyles();

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

            alt={movie.title}
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
              {movie.rating}
            </Typography>
            <GetAppIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body1"
            >
              {movie.totalDownloads}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
          <Tooltip classes={{
              popper: classes.toolTipPopper,
              tooltip: classes.toolTip,
            }} title="LIKE" placement="bottom">
            <IconButton
              className={classes.iconButton}
              >
                <InfoIcon className={classes.heartIcon}/>
            </IconButton>
          </Tooltip>

          </Grid>
        </Grid>
      </CardActions>
    </CardContent>
  </Card>
  );
};

MovizCard.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.object.isRequired
};

export default MovizCard;
