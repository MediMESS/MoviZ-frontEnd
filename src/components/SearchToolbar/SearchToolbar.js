import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {MovizCategorie} from './components';
import Autosuggest from 'react-autosuggest';

// import './ProductsToolbar.css';

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
    position: 'relative',
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
  // autoSuggest
  container: {
    flexGrow: 1,
    borderRadius: '4px',
    padding: '5px',
    width: '100%',
  },
  input: {
    width: '100%',
    border: '0',
    fontSize: '20px',
    fontFamily: `'Roboto', sans-serif`,
    background: 'none',
    color: 'rgb(39, 43, 46)',
    '&:focus' :{
      outline: 'none'
    },
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    width: '100%',
    borderRadius: '0px 4px',
    top: '45px',
    left: '0',
    backgroundColor: '#fff',
    borderTop:'1px solid rgba(170, 170, 170, 0.3)',
    boxShadow: '0 4px 10px rgba(32,33,36,0.28)',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '300',
    fontSize: '16px',
    borderbottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    zIndex: 2,
  },
  suggestionsList: {
    listStyleType:'none',
    maxHeight: '300px',
    overflowY: 'scroll',
    margin: 0,
    padding: 0
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px',
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd',
  },
  suggestionMatch: {
    color: 'red',
    fontWeight: 'bold',
  },


});


const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
  return (
    <span>
      {/*console.log("RENDER SUGGESTION", suggestion), console.log(suggestion.title.indexOf(suggestion))*/}
      {suggestion.title}
    </span>
  )};

class SearchToolbar extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      suggestions: []
    }
  }

  onSubmitFunction = () => {
    console.log(this.state.searchInput);
  }



  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    if(newValue === "")
      this.setState({suggestions: this.props.getSuggestions(newValue)});

  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    // console.log("HEYYY ONsuggestionsFetchRequested");
    if(value !== "")
      this.setState({suggestions: this.props.getSuggestions(value)});
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render(){
    const { classes, options } = this.props;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type Your Search Here',
      value,
      onChange: this.onChange,
    };

    if(options.length !== 0)
      return (
        <div
          className={clsx(classes.root)}
        >
          <div className={classes.row}>
            <Paper className={clsx(classes.paper)} >
              <SearchIcon className={classes.icon} />

              <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                theme= {classes}
              />
            </Paper>
            <MovizCategorie
              className={classes.categorie}
              options={options}/>
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
    else
      return (
      <div
        className={clsx(classes.root)}
      >
        <div className={classes.row}>
          <Paper className={clsx(classes.paper)} >
            <SearchIcon className={classes.icon} />

            <Autosuggest
              suggestions={[]}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              theme= {classes}
            />
          </Paper>
        </div>
      </div>);

  }
}
export default withStyles(useStyles)(SearchToolbar);
