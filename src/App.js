import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This page could be yours.
          </p>
          <p>Click<a
            className="App-link"
            href="https://www.cececodes.com"
            target="_blank"
            rel="noopener noreferrer"
          > here</a> for a free consultation, <br/>and get your website started TODAY!</p>
        </header>
        <footer>
            <div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
