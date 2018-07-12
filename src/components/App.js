import React, { Component, Fragment } from 'react';
import Header from './Header';
import QuoteBox from './QuoteBox';
import Footer from './Footer';
import { randomRgbaColor } from '../helpers';
import 'bulma/css/bulma.min.css';
import '../index.css';


class App extends Component {
  state = {
    overlayColor: {
      backgroundColor: 'rgba(255, 255, 255, 0.342)'
    }
  }

  changeOverlayColor = () => {
    //randomly change background overlay color
    //function came from ../helpers.js 
    this.setState({
      overlayColor: {
        backgroundColor: randomRgbaColor()
      }
    });
  }

  render() {
    return (
      <Fragment>
        <main 
          className="main section background-img--overlay"
          style={this.state.overlayColor}>
          <div className="container main__container">
            
            <Header title={'Random Quote Machine!!'} />

            <QuoteBox changeOverlayColor={this.changeOverlayColor}/>
          </div>
        </main>

        <Footer text={'Copyright© 2018. All rights reserved.'} />
      </Fragment>
    );
  }
}

export default App;
