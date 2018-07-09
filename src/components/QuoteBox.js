import React, { Component } from 'react';
import NewQuote from './NewQuote';
import Tweet from './Tweet';
import BlockQuote from './BlockQuote';

class QuoteBox extends Component {
  state = {
    quote: {
      text: 'Santa Claus is coming to town',
      author: 'christmas carols'
    }
  }

  handleNewQuote = () => {
    alert('heyy');
  }

  render() {
    const quote = this.state.quote;

    return (
      <section id="quote-box" className="quote-box">
        <BlockQuote 
          quote={quote.text}
          author={quote.author} />

        <div className="button-section is-flex-mobile">
          <NewQuote 
            text={'New Quote!'}
            handleNewQuote={this.handleNewQuote}/>
          
          <Tweet />
        </div>
      </section>
    );
  }
}

export default QuoteBox;