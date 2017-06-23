import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from './CheckboxWithLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Babylon Checkbox</h2>
        </div>
        <div className="App-intro">
          <CheckboxWithLabel
            id="my-checkbox"
            value="is-checked"
            checked
            onChange={ (e) => console.warn(`Checkbox changed: checked? ${e.target.checked} value: ${e.target.value}`) }
            label="Select this checkbox"
          />
      </div>
      </div>
    );
  }
}

export default App;
