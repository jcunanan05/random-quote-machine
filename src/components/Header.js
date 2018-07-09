import React from 'react';

const Header = props => (
  <header className="header has-text-centered">
    <h1 className="title">
      {props.title}
    </h1>
  </header>
);

export default Header;