import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="8.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Didn't find what you were looking for? We also have custom made planets. Get your quote
            <a 
              className="app-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"> here:
            </a>
          </p>
        </footer>
      </div>
    );
  }
}