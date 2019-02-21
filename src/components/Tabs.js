import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose } from '../actions/env';
import { show_links } from '../actions/links';

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
    this.props.showLinks(this.state.defaultEnv, ['WOG', 'GREEN', 'DARK', 'MOVE', 'OMG']);
  }

  handleChangeEnv(env) {
    this.props.chooseEnv(env);
    this.props.showLinks(env, ['WOG', 'GREEN', 'DARK', 'MOVE', 'OMG']);
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
  chooseEnv: (env) => dispatch(choose(env)),
  showLinks: (env, domains) => dispatch(show_links(env, domains))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
