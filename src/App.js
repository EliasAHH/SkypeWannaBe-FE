import React, { Component } from 'react';
import Welcome from './pages/Welcome'
import ConversationsList from './components/ConversationsList';
import { API_ROOT } from './constants';

class App extends Component {
  state ={
      currentUser: {}
    }

    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
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
}

export default App;
