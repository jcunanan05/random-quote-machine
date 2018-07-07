import React from 'react';

const Header = props => (
  <header>
    <h1 className="title is-2 has-text-centered">
      {props.title}
    </h1>
  </header>
);

export default Header;