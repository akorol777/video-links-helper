import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import getLinks from '../selectors/links'

class Links extends Component {

  render() {
    return (
      <div>
        {getLinks(this.props.env).map(({link, domain}, i) => {
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
  env: state.store.env
});

export default connect(mapStateToProps)(Links);
