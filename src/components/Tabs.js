import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { show_links, choose_env } from '../actions/actions';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envTitles: this.props.envTitles
    };
    this.handleChangeEnv = this.handleChangeEnv.bind(this);
  }

  componentDidMount() {
    this.props.showLinks();
  }

  handleChangeEnv(env) {
    this.props.chooseEnv(env);
    this.props.showLinks();
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
  chooseEnv: (env) => dispatch(choose_env(env)),
  showLinks: (env, domains) => dispatch(show_links(env, domains))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
