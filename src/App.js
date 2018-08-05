import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Click</button>
              {on && <h2>Wassup!</h2>}
            </Fragment>
          )}
        </Header>
        <Header>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Click</button>
              {on && <h2>Wassup!</h2>}
            </Fragment>
          )}
        </Header>
        <List />
      </div>
    );
  }
}

export default App;
