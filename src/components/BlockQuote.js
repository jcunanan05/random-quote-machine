import React from 'react';

const BlockQuote = props => (
  <blockquote>
    <h2 className="subtitle is-2">
      "{props.quote}"
    </h2>

    <footer>
      <p className="subtitle is-4">
        - {props.author}
      </p>
    </footer>
  </blockquote>
);

export default BlockQuote;