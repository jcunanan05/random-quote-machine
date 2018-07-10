import React, { Component } from 'react';
import NewQuote from './NewQuote';
import Tweet from './Tweet';
import BlockQuote from './BlockQuote';
import request from '../request';

class QuoteBox extends Component {
  state = {
    quote: {
      text: 'Santa Claus is coming to town',
      author: 'christmas carols'
    }
  }

  getNewQuote = () => {
    request.getQuote(data => {
      //set fetched quote data as state
      const quote = {
        text: data[0].quote,
        author: data[0].author
      };

      this.setState({
        quote
      });
    });
  }

  componentDidMount() {
    this.getNewQuote();
  }

  render() {
    const quote = this.state.quote;

    return (
      <section id="quote-box" className="box quote-box">
        <BlockQuote 
          quote={quote.text}
          author={quote.author} />

        <div className="button-section is-flex-mobile">
          <NewQuote 
            text={'New Quote!'}
            handleNewQuote={this.getNewQuote}/>
          
          <Tweet />
        </div>
      </section>
    );
  }
}

export default QuoteBox;