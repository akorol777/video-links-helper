import React, { Component } from 'react';

class Tab extends Component {

  render() {
    const { title, isActive } = this.props;
    const classNames = isActive ? 'is-active button' : 'button';

    return (
      <div
        className={classNames}
        onClick={() => {
          this.props.handleChangeEnv(title)
        }}
      >
        {title}
      </div>
    )
  }
}

export default Tab;