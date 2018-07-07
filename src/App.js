import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';

class App extends Component {


  render() {
    return (
      <div className="hero is-fullheight">
        <main className="section">
          <div className="container">
            <h1 className="title is-2 has-text-centered">
              Random Quote Machine!!
            </h1>

            <article className="box has-text-centered">
              <h2 className="subtitle is-2">
                "I am batman"
              </h2>

              <div className="container">
                <button className="button is-rounded is-info">
                  tweet
                </button>

                <button className="button is-primary">
                  new quote
                </button>
              </div>
            </article>
          </div>
        </main>

        <footer className="footer has-text-centered">
          Copyright &copy; 2018. All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
