import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import getLinks from '../selectors/links'

class Links extends Component {
  render() {

    return (
      <div>
        {getLinks(this.props.store).map(({link, domain, pr_num}, i) => {
          return <Link
            link = {link}
            key = {i}
            domain = {this.props.store.show_label ? domain : null}
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
