import React from 'react';
import copy from 'copy-to-clipboard';

export default (props) => {
  const handleBtnCopyClick = () => {
    copy(props.url)
  };

  return (
    <div
      className="button button__copy"
      onClick={() => {
        handleBtnCopyClick(this)
      }}
    >copy</div>
  )
}