import React, { Component, Fragment } from 'react';
import Header from './Header';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
import 'bulma/css/bulma.min.css';
import '../index.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="main section">
          <div className="container main__container">
            
            <Header title={'Random Quote Machine!!'} />

            <QuoteBox />
          </div>
        </main>

        <Footer text={'Copyright© 2018. All rights reserved.'} />
      </Fragment>
    );
  }
}

export default App;
