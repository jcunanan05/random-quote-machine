import React from 'react';

const NewQuote = props => (
  <button 
    id="new-quote" 
    className="new-quote button is-primary"
    onClick={props.handleNewQuote} >
    <i className="fas fa-plus"></i>
    &nbsp;
    {props.text}
  </button>
);

export default NewQuote;