import React from 'react';

export default (props) => {
  const domain = props.domain;
  const linkLabelClass = `link__label link__label__${domain.toLowerCase()}`;
  const renderLabel = (
    domain &&
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={linkLabelClass}
    >{domain}</a>
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