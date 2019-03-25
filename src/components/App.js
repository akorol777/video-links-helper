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
  componentDidMount() {
    // Open all links on Enter
    document.body.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        document.getElementById('js-open-all-links-btn').click();
      }
    });
  }

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
