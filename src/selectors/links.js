const data = require('../JSON/data.json');

export default ({
    env = data.env[0],
    domain = 'all',
    pr_num
  }) => {

  const LOCALHOST = 'localhost:3000';
  const MSN_LOCALHOST = 'msn.lvh.me:3000/en-us/entertainment/rf-watch-online';
  const activeEnv = env;
  const activeDomains = domain === 'all' ? Object.keys(data.domains) : domain.split();
  const msnStageLink = 'int1.msn.com/en-us/entertainment/rf-watch-online?rf_env=staging&sys_id=123456789';
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';

  const getProtocol = () => isStage() || isProd() ? 'https://' : 'http://';

  const getHost = (hostDomain) => {
    const domain_link = data.domains[hostDomain][activeEnv];
    const isMSN = () => hostDomain === 'MSN';
    const domain = domain_link ? `?staging_domain=${domain_link}` : '';

    // Stage
    if (isStage()) {
      if (isMSN()) {
        return msnStageLink;
      }
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com${domain}`
    }

    // Prod
    if (isProd()) {
      return domain_link
    }

    // Local
    const host = isMSN() ? MSN_LOCALHOST : LOCALHOST;
    return `${host}${domain}`;
  };

  const activeLinks = activeDomains.map((activeDomain) => {
    return {
      link: getProtocol() + getHost(activeDomain),
      domain: activeDomain
    }
  });

  return activeLinks
}