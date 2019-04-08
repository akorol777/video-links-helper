import React, { PureComponent } from 'react';

class Tab extends PureComponent {

  render() {
    const { title, isActive } = this.props;
    const classNames = isActive ? 'is-active button' : 'button';

    return (
      <div
        className={classNames}
        onClick={() => {
          this.props.handleClick(title)
        }}
      >
        {title}
      </div>
    )
  }
}

export default Tab;