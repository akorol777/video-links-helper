import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import getLinks from '../selectors/links'

class Links extends Component {
  render() {
    return (
      <div>
        {getLinks(this.props.store).map(({link, domain}, i) => {
          return <Link
            link = {link}
            key = {i}
            domain = {domain}
          />;
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  store: state.store
});

export default connect(mapStateToProps)(Links);
