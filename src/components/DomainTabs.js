import React, { Component } from 'react';
import Tab from './Tab';
import { connect } from 'react-redux';
import { choose_domain } from "../actions/actions";

export class DomainTabs extends Component {
  handleChangeDomain = (domain) => {
    this.props.chooseDomain(domain);
  };

  render() {
    const domainTitles = ['all', ...this.props.domainTitles];

    return (
      <div className="row">
        {domainTitles.map((title, i) => {
          return <Tab
            title={title}
            key={i}
            isActive={this.props.activeDomain === title}
            handleClick={this.handleChangeDomain}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeDomain: state.store.domain
});

const mapDispatchToProps = (dispatch) => ({
  chooseDomain: (domain) => dispatch(choose_domain(domain))
});

export default connect(mapStateToProps, mapDispatchToProps)(DomainTabs);