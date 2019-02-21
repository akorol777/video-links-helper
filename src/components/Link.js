import React from 'react';

const Link = (props) => {

  return(
    <div className="link__wrapper">
      <div className="link__label">
        {props.domain}
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >{props.link}</a>
    </div>
  );
};

export default Link;