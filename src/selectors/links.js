const data = require('../JSON/data.json');

export default (env, domains) => {
  const LOCALHOST = 'localhost:3000';
  const activeEnv = env || data.env[0];
  const activeDomains= domains || Object.keys(data.domains);
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';

  const getProtocol = () => isStage() || isProd() ? 'https://' : 'http://';

  const getHost = (domain) => {
    const domain_link = data.domains[domain][activeEnv];

    // Stage
    if (isStage()) {
      const pr_num = 2129;
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com?staging_domain=${domain_link}`
    }

    // Prod
    if (isProd()) {
      return domain_link
    }

    // Local
    return `${LOCALHOST}?staging_domain=${domain_link}`;
  };

  const activeLinks = activeDomains.map((domain) => {
    return {
      link: getProtocol() + getHost(domain),
      domain: domain
    }
  });

  return activeLinks
}