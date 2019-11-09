import React, { Component } from 'react';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import 'common/Signed.css';
import { ProductsToolbar, MovizCard } from './components';
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
  }
});

class Dashboard extends Component {


  constructor(props){
    super(props);
    this.state = {
      searchInput: '',
      products: data
    };
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    fetch('http://localhost:4000/searchDashboard', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        input: value
      })
    })
      .then(prom => prom.json())
      .then(data => {
        console.log(data);
        this.setState({products: data});
      });



  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;
  //
  //   return inputLength === 0 ? [] : languages.filter(lang =>
  //     lang.name.toLowerCase().slice(0, inputLength) === inputValue
  //   );
  // };
}
  render() {
    const {classes} = this.props;
    // console.log("THIS PROPS", this.props);

    return (
      <div className={classes.root}>
        <ProductsToolbar
          getSuggestions={this.getSuggestions}/>
        <div className={classes.content}>
          <Grid
            container
            spacing={3}
          >
            {this.state.products.map(product => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={4}
                sm={6}
                xs={12}
              >
                <MovizCard product={product} />
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

export default withStyles(useStyles)(Dashboard)
