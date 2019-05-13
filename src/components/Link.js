import React from 'react';
import BtnCopy from './BtnCopy';

export default (props) => {
  const domain = props.domain || '';
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
  const renderBtnCopy = domain && <BtnCopy url={props.link}/>;

  return (
    <div className="link__wrapper">
      {renderLabel}
      {renderBtnCopy}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link js-link-to-open"
      >{props.link}</a>
    </div>
  );
};