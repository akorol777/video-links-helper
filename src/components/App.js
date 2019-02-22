import React, { Component } from 'react';
import '../styles/App.scss';
import EnvTabs from "./EnvTabs";
import Links from "./Links";

const data = require('../JSON/data.json');
const envTitles = data.env;

class App extends Component {
  render() {
    return (
      <div className="App container">
        <EnvTabs envTitles={envTitles}/>
        <Links />
      </div>
    );
  }
}

export default App;
