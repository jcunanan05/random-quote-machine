import React from 'react';

const Tweet = props => (
  <button id="tweet-quote" className="tweet-quote button is-rounded is-info">
    <i className="fab fa-twitter"></i>
    <p className="is-hidden-mobile">&nbsp;Tweet</p>
  </button>
);

export default Tweet;