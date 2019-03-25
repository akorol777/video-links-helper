import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_traffic } from "../actions/actions";

class TrafficTabs extends Component {
  handleChangeTraffic = (traffic) => {
    this.props.chooseTraffic(traffic);
  };

  render() {
    return (
      <div className="row">
        {this.props.trafficTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activeTraffic === title}
            handleClick={this.handleChangeTraffic}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTraffic: state.store.traffic
});

const mapDispatchToProps = (dispatch) => ({
  chooseTraffic: (traffic) => dispatch(choose_traffic(traffic))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficTabs);