import React, { Component } from 'react';

class Tab extends Component {

  render() {
    const { envTitle, isActive } = this.props;
    const classNames = isActive ? 'is-active button' : 'button';

    return (
      <div
        className={classNames}
        onClick={() => {
          this.props.handleChangeEnv(envTitle)
        }}
      >
        {envTitle}
      </div>
    )
  }
}

export default Tab;