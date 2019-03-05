import React from 'react';

const Link = (props) => {
  const renderLabel = (
    props.domain &&
    <div className="link__label">
      {props.domain}
    </div>
  );

  return(
    <div className="link__wrapper">
      {renderLabel}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >{props.link}</a>
    </div>
  );
};

export default Link;