import React from 'react';

const BlockQuote = props => (
  <blockquote className="blockquote">
    <h2 id="text" className="title title__text has-text-centered">
      <span className="double-quote">"</span>
      {props.quote.text}
      <span className="double-quote">"</span>
    </h2>

    <footer>
      <p id="author" className="subtitle subtitle__author">
        - <em>{props.quote.author}</em>
      </p>
    </footer>
  </blockquote>
);

export default BlockQuote;