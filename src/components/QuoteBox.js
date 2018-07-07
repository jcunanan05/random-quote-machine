import React from 'react';
import NewQuote from './NewQuote';
import Tweet from './Tweet';
import BlockQuote from './BlockQuote';

const QuoteBox = props => (
  <section className="column section is-half">
    <div className="section box">
      
      <BlockQuote 
        quote={props.quote}
        author={props.author} />

      <div className="columns section is-multiline is-3">
        <NewQuote text={'New Quote!'} />

        <Tweet text={'Tweet'} />
      </div>
    </div>
  </section>
);

export default QuoteBox;