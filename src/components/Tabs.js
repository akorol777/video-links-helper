import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose } from '../actions/env';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envTitles: this.props.envTitles,
      defaultEnv: this.props.envTitles[0]
    };
    this.handleChangeEnv = this.handleChangeEnv.bind(this);
  }

  componentDidMount() {
    this.props.chooseEnv(this.state.defaultEnv);
  }

  handleChangeEnv(env) {
    this.props.chooseEnv(env);
  }

  render() {
    return (
      <div className="row">
        {this.state.envTitles.map((envTitle, i) => {
          return <Tab
            envTitle={envTitle}
            key={i}
            isActive={this.props.activeEnv === envTitle}
           handleChangeEnv={this.handleChangeEnv}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeEnv: state.env
});

const mapDispatchToProps = (dispatch) => ({
  chooseEnv: (env) => dispatch(choose(env))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
