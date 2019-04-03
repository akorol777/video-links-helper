import React, { Component } from 'react';
import '../styles/App.scss';
import EnvTabs from "./EnvTabs";
import Links from "./Links";
import DomainTabs from "./DomainTabs";
import TrafficTabs from "./TrafficTabs";
import VideoTypeTabs from "./VideoTypeTabs";
import PageTypeTabs from "./PageTypeTabs";
import InputPR from "./InputPR";
import LabelToggle from "./LabelToggle";
import Opener from "./Opener"

const data = require('../JSON/data.json');
const envTitles = data.env;
const domainTitles = Object.keys(data.domains);
const trafficTitles = data.traffic;
const videoTypeTitles = data.video_type;
const pageTypeTitles = Object.keys(data.pages);

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
        <TrafficTabs trafficTitles={trafficTitles}/>
        <VideoTypeTabs videoTypeTitles={videoTypeTitles}/>
        <PageTypeTabs pageTypeTitles={pageTypeTitles}/>
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
