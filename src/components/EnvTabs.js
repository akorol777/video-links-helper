import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_env } from '../actions/actions';

export class EnvTabs extends Component {
  constructor(props) {
    super(props);
    this.handleChangeEnv = this.handleChangeEnv.bind(this);
  }

  handleChangeEnv(env) {
    this.props.chooseEnv(env);
  }

  render() {
    return (
      <div className="row">
        {this.props.envTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activeEnv === title}
            handleChangeEnv={this.handleChangeEnv}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeEnv: state.store.env
});

const mapDispatchToProps = (dispatch) => ({
  chooseEnv: (env) => dispatch(choose_env(env))
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvTabs);
