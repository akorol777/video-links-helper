import React from 'react';

const Link = (props) => {
  const LOCALHOST = 'localhost:3000';
  const { activeEnv, data, domain} = props;

  const isLocal = () => activeEnv === 'local';
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';

  const getProtocol = () => isLocal() ? 'http://' : 'https://';

  const getHost = () => {
    if (isLocal()) {
      return `${LOCALHOST}?staging_domain=${data[activeEnv]}`;
    }

    if (isStage()) {
      const pr_num = 2129;
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com?staging_domain=${data[activeEnv]}`
    }

    if (isProd()) {
      return data[activeEnv]
    }
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
        rel="noopener noreferrer"
      >{getLink()}</a>
    </div>
  );
};

export default Link;