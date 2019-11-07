import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>
  ({
    title: {
      fontWeight:'800',
      color: theme.palette.secondary.main
    },
    welcome: {
      margin:'10px auto',
      width: '600px',
      backgroundColor:'white',
      display: 'flex',
      flexFlow:'row wrap',
      justifyContent:'center'
    }
  });

class Slogan extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {classes} = this.props;
    return (
      <div style={{textAlign:"center"}}>
        <div className={classes.welcome}>
          <Typography variant="h1" className={classes.title} >
            MoviZ
          </Typography>
          <Typography variant="h1" color="primary" style={{alignSelf:'center'}}>
            The Best Website for Movie's Lover
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Slogan);
