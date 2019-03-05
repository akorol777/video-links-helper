import React, { Component } from 'react';
import '../styles/App.scss';
import EnvTabs from "./EnvTabs";
import Links from "./Links";
import DomainTabs from "./DomainTabs";
import InputPR from "./InputPR";
import LabelToggle from "./LabelToggle";
import Opener from "./Opener"

const data = require('../JSON/data.json');
const envTitles = data.env;
const domainTitles = Object.keys(data.domains);

class App extends Component {
  render() {
    return (
      <div className="App container">
        <EnvTabs envTitles={envTitles}/>
        <InputPR/>
        <DomainTabs domainTitles={domainTitles}/>
        <Links />
        <div className="row">
          <LabelToggle/>
          <Opener />
        </div>
      </div>
    );
  }
}

export default App;
