import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_env } from '../actions/actions';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envTitles: this.props.envTitles
    };
    this.handleChangeEnv = this.handleChangeEnv.bind(this);
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
  activeEnv: state.store.env
});

const mapDispatchToProps = (dispatch) => ({
  chooseEnv: (env) => dispatch(choose_env(env))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
