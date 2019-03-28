const data = require('../JSON/data.json');

export default ({
    env = data.env[0],
    domain = 'all',
    pr_num,
    traffic = data.traffic[0],
    video_type = data.video_type[0]
  }) => {

  const LOCALHOST = 'localhost:3000';
  const MSN_LOCALHOST = 'msn.lvh.me:3000/en-us/entertainment/rf-watch-online';
  const activeEnv = env;
  const activeDomains = domain === 'all' ? Object.keys(data.domains) : domain.split();
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';

  // PROTOCOL
  const getProtocol = () => isStage() || isProd() ? 'https://' : 'http://';

  // HOST
  const getHost = (domain) => {
    const domain_link = data.domains[domain][activeEnv];
    const isMSN = () => domain === 'MSN';
    const msnStageLink = 'int1.msn.com/en-us/entertainment/rf-watch-online?rf_env=staging&sys_id=123456789';

    // Stage
    if (isStage()) {
      if (isMSN()) {
        return msnStageLink;
      }
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com`
    }

    // Prod
    if (isProd()) {
      return domain_link
    }

    // Local
    return isMSN() ? MSN_LOCALHOST : LOCALHOST;
  };

  // PATH
  const getPath = () => {
    let path = '';
    path += `/${video_type}`;

    return path;
  };

  // QUERY
  const getQuery = (domain) => {
    let query = '';
    let sign = '?';
    const isMSN = () => domain === 'MSN';

    const addToQuery = (string) => {
      query += sign + string;
      sign = '&';
    };

    // Stage
    if (isStage()) {
      if (isMSN()) {
        addToQuery(`rf_env=staging&sys_id=123456789`);
      } else {
        addToQuery(`staging_domain=${data.domains[domain][activeEnv]}`);
      }

    // Prod
    } else if (isProd()) {

    // Local
    } else {
      if (isMSN()) {

      } else {
        addToQuery(`staging_domain=${data.domains[domain][activeEnv]}`);
      }
    }

    addToQuery(`force_traffic=${traffic}`);

    return query;
  };

  const activeLinks = activeDomains.map((activeDomain) => {
    getQuery(activeDomain);
    return {
      link: getProtocol() + getHost(activeDomain) + getPath() + getQuery(activeDomain),
      domain: activeDomain
    }
  });

  return activeLinks
}