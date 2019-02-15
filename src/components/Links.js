import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';

class Links extends Component {
  domains = this.props.domains;

  render() {
    return (
      <div>
        {Object.keys(this.domains).map((domain) => {
          return <Link
            domain={domain}
            key={domain}
            data={this.domains[domain]}
            activeEnv={this.props.activeEnv}
          />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeEnv: state.env
});

export default connect(mapStateToProps)(Links);
