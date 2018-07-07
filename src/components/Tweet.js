import React from 'react';

const Tweet = props => (
  <button className="button is-rounded is-info">
    {props.text}
  </button>
);

export default Tweet;