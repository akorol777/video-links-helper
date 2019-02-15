import React from 'react';

const Link = (props) => {
  const LOCALHOST = 'localhost:3000';
  const { activeEnv, data, domain} = props;

  const isLocal = () => activeEnv === 'local';

  const getProtocol = () => isLocal() ? 'http://' : 'https://';

  const getHost = () => {
    if (isLocal()) {
      return `${LOCALHOST}?staging_domain=${data[activeEnv]}`;
    }

    return 'test'
  };

  const getLink = () => {
    return getProtocol() + getHost();
  };

  return(
    <div className="link__wrapper">
      <div className="link__label">
        {domain}
      </div>
      <a
        href={getLink()}
        target="_blank"
      >{getLink()}</a>
    </div>
  );
};

export default Link;