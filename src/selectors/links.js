const data = require('../JSON/data.json');

export default ({
    env = data.env[0],
    domain = 'all',
    pr_num
  }) => {

  const LOCALHOST = 'localhost:3000';
  const activeEnv = env;
  const activeDomains = domain === 'all' ? Object.keys(data.domains) : domain.split();
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';

  const getProtocol = () => isStage() || isProd() ? 'https://' : 'http://';

  const getHost = (hostDomain) => {
    const domain_link = data.domains[hostDomain][activeEnv];

    // Stage
    if (isStage()) {
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com?staging_domain=${domain_link}`
    }

    // Prod
    if (isProd()) {
      return domain_link
    }

    // Local
    return `${LOCALHOST}?staging_domain=${domain_link}`;
  };

  const activeLinks = activeDomains.map((activeDomain) => {
    return {
      link: getProtocol() + getHost(activeDomain),
      domain: activeDomain
    }
  });

  return activeLinks
}