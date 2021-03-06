import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_env } from '../actions/actions';

export class EnvTabs extends Component {
  handleChangeEnv = (env) => {
    this.props.chooseEnv(env);
  };

  render() {
    return (
      <div className="row">
        {this.props.envTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activeEnv === title}
            handleClick={this.handleChangeEnv}
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
