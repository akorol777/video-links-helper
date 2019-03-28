import React from 'react';

export default (props) => {
  const renderLabel = (
    props.domain &&
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="link__label"
    >{props.domain}</a>
  );

  return (
    <div className="link__wrapper">
      {renderLabel}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link js-link-to-open"
      >{props.link}</a>
    </div>
  );
};