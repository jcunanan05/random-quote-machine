import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const QuoteHeader = props => (
  <h2 id="text" className="title title__text has-text-centered">
    <span className="double-quote">"</span>
      {props.text}
    <span className="double-quote">"</span>
  </h2>
);

const QuoteFooter = props => (
  <footer>
    <p id="author" className="subtitle subtitle__author">
      - <em>{props.author}</em>
    </p>
  </footer>
);

function fadeTranstion(jsx, key) {
  return (
    <CSSTransition classNames="fade"
      key={key}
      timeout={{ enter: 500, exit: 300 }} >
      { jsx }
    </CSSTransition>
  );
}

const BlockQuote = props => (
  <TransitionGroup 
    component="blockquote"
    className="blockquote" >

    {fadeTranstion(<QuoteHeader text={props.quote.text} />, props.quote.text)}

    {fadeTranstion(<QuoteFooter author={props.quote.author} />, props.quote.author)}
  </TransitionGroup>
);

export default BlockQuote;