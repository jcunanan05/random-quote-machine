import React, { Component } from 'react';

class NewQuote extends Component {
  render() {
    const props = this.props;

    return (
      <button 
        id="new-quote" 
        className={`new-quote button is-primary ${props.isLoading ? 'is-loading' : ''}`}
        disabled={props.isLoading}
        onClick={props.handleNewQuote} >
        <i className="fas fa-plus"></i>
        &nbsp;
        {props.text}
      </button>
    );
  }
};

export default NewQuote;