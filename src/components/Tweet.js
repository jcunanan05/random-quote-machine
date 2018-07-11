import React from 'react';

function quoteString(text, author) {
  return `%22${text}%22%0A - ${author}`;
}

const Tweet = props => (
  <a id="tweet-quote" 
    className="tweet-quote button is-rounded is-info" 
    href={`https://twitter.com/intent/tweet?text=${quoteString(props.quote.text, props.quote.author)}`} 
    target="_blank"
    rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
    <p className="is-hidden-mobile">&nbsp;Tweet</p>
  </a>
);

export default Tweet;