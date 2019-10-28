import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

class Home extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div >
        <Typography variant="h1">
          WELCOME!
        </Typography>
      </div>
    );
  }
}

export default Home;
