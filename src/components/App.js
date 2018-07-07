import React, { Component } from 'react';
import Header from './Header';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
import 'bulma/css/bulma.min.css';

class App extends Component {


  render() {
    return (
      <div className="hero is-fullheight">
        <main className="section">
          <div className="container">
            
            <Header title={'Random Quote Machine!!'} />

            <QuoteBox 
              quote={'Santa Claus is coming to town'}
              author={'christmas songs'} />
          </div>
        </main>

        <Footer text={'Copyright© 2018. All rights reserved.'} />
      </div>
    );
  }
}

export default App;
