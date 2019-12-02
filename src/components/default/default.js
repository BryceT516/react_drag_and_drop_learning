import React from 'react';
import logo from './logo.svg';
import './default.css';

function Default() {
  return (
    <div className="Default">
      <header className="Default-header">
        <img src={logo} className="Default-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Default-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default Default;
