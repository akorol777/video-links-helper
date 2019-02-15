import React, { Component } from 'react';
import '../styles/App.scss';
import './Tabs';
import Tabs from "./Tabs";

const data = require('../JSON/data.json');
const envTitles = data.env;

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Tabs envTitles={envTitles}/>
        <div>content</div>
      </div>
    );
  }
}

export default App;
