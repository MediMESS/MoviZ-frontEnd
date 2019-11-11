import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import { withStyles } from '@material-ui/core/styles';

// Imagine you have a list of languages that you'd like to autosuggest.

const data = [
  {
    title: 'Aladin',
  },
  {
    title: 'Joker',
  },
  {
    title: 'Jumanji',
  },
  {
    title: 'Avengers EndGame',
  },
  {
    title: 'How to Train Your Dragon: The Hidden World',
  },
  {
    title: 'The Irishman',
  },
  {
    title: 'Super Deluxe',
  },
  {
    title: 'Dave Chappelle: Sticks & Stones',
  },
  {
    title: 'Once Upon A Time... In Hollywood',
  },
  {
    title: 'Toy Story 4',
  },
  {
    title: 'Weathering with You',
  },
  {
    title: 'Waves',
  },
  {
    title: 'Spider-Man: Far from Home',
  },
  {
    title: 'A Hidden Life',
  },
  {
    title: 'Alita: Battle Angel',
  },
  {
    title: 'Shazam!',
  },
  {
    title: 'Dora and the lost city of gold',
  },
  {
    title: 'Truth and Justice',
  },
];


const usesStyles = theme => ({
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
    }
  }

});


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div style={{list_style_type:'none'}}>
    {suggestion.name}
  </div>
);

class InputAndSuggestions extends Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    console.log("Change", newValue);
    if(newValue === "")
      this.props.getSuggestions(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    console.log("HEYYY ONsuggestionsFetchRequested");
    if(value !== "")
      this.props.getSuggestions(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const {classes} = this.props;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type Your Search Here',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme= {classes}
      />
    );
  }
}

export default withStyles(usesStyles)(InputAndSuggestions);
