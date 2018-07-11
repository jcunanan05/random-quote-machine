import React, { Component } from 'react';
import NewQuote from './NewQuote';
import Tweet from './Tweet';
import BlockQuote from './BlockQuote';
import request from '../request';

class QuoteBox extends Component {
  state = {
    quote: {
      text: 'Never say never',
      author: 'Justin Bieber'
    }
  }

  getNewQuote = () => {
    request.getQuote(data => {
      //set fetched quote data as state
      const quote = {
        text: data[0].quote,
        author: data[0].author
      };
      
      //update quote
      this.setState({quote});
    });
  }

  componentWillMount() {
    this.getNewQuote();
  }

  render() {
    const quote = this.state.quote;

    return (
      <section id="quote-box" className="box quote-box">
        <BlockQuote 
          quote={quote} />

        <div className="button-section is-flex-mobile">
          <NewQuote 
            text={'New Quote!'}
            handleNewQuote={this.getNewQuote}/>
          
          <Tweet quote={quote} />
        </div>
      </section>
    );
  }
}

export default QuoteBox;