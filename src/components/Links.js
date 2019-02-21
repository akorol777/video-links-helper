import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';

class Links extends Component {

  render() {
    if (!this.props.links) {
      return null
    }

    return (
      <div>
        {this.props.links.map(({link, domain}, i) => {
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
  activeEnv: state.env,
  links: state.links
});

export default connect(mapStateToProps)(Links);
