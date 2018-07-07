import React from 'react';

const NewQuote = props => (
  <button className="button is-primary">
    {props.text}
  </button>
);

export default NewQuote;