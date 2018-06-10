import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          {({ on, toggle }) => (
            <div style={{ padding: 20 }}>
              <button onClick={toggle}>Click</button>
              {on && <h2>Wassup!</h2>}
            </div>
          )}
        </Header>
        <Header>
          {({ on, toggle }) => (
            <div style={{ padding: 20 }}>
              <button onClick={toggle}>Click</button>
              {on && <h2>Wassup!</h2>}
            </div>
          )}
        </Header>
      </div>
    );
  }
}

export default App;
