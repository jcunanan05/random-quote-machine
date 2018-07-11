import React from 'react';

const Footer = props => (
  <footer className="footer has-text-centered">
    {props.text}&nbsp;
    Made by&nbsp;
    <a href="https://github.com/jcunanan05" 
      target="_blank"
      rel="noopener noreferrer">
      Jonathan Cunanan
    </a>
  </footer>
);

export default Footer;