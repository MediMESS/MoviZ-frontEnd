import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {MovizCategorie} from '../MovizCategorie';
import InputAndSuggestions from './components/InputAndSuggestions/InputAndSuggestions';
import './ProductsToolbar.css';

const useStyles = theme => ({
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  categorie: {
    marginRight: theme.spacing(3)
  },
  paper: {
    flexGrow: 1,
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  searchInput: {
    flexGrow: 1,
    fontSize: '20px',
    lineHeight: '16px',
    borderBottom: 'none',
    width: '100%',
    border: '0',
  },

});

class ProductsToolbar extends Component {
  constructor(props){
    super(props);
    this.state={
      searchInput: '',
      recentSearches: ['start wars', 'yes, man', 'donkey kong', 'joker']
    }
  }
  onChangeSearch = (e) => {
    console.log(e.target.value);
    this.setState({searchInput: e.target.value});
  }
  onSubmitFunction = () => {
    console.log(this.state.searchInput);
  }
  render(){
    const recentSearches = ['start wars', 'yes, man', 'donkey kong', 'joker'];
    console.log(this.state.recentSearches);
    const { classes } = this.props;
    return (
      <div
        className={clsx(classes.root)}
      >
        <div className={classes.row}>
          <Paper className={clsx(classes.paper)} >
            <SearchIcon className={classes.icon} />
            { /*
            <Input
              onChange={this.onChangeSearch}
              className={classes.searchInput}
              placeholder="SearchMovie"
              disableUnderline
            />
            <SuggestionInputSearch
              disableUnderline
              suggestionListClass={recentSearches}
              inputPosition="start"
              placeholder="SearchMovie"
              inputClass={clsx(classes.searchInput, 'searchInput')}
              maxSuggestions={20}
              onSubmitFunction={this.onSubmitFunction} />
              {/* inputClass={classes.searchInputTransparent} */}
              <InputAndSuggestions
                getSuggestions={this.props.getSuggestions}
              />
          </Paper>
          <MovizCategorie className={classes.categorie}/>
          <Button
            color="primary"
            variant="contained"
            style={{width: '200px', height: '100%'}}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(ProductsToolbar);
