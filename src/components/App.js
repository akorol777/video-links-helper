import React, { Component } from 'react';
import '../styles/App.scss';
import './Tabs';
import Tabs from "./Tabs";
import Links from "./Links";

const data = require('../JSON/data.json');
const envTitles = data.env;
const domains = data.domains;

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Tabs envTitles={envTitles}/>
        <Links domains={domains}/>
      </div>
    );
  }
}

export default App;
