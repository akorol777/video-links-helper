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
  const MSN_HOST = 'int1.msn.com';
  const MSN_PATH = '/en-us/entertainment/rf-watch-online';
  const MSN_QUERY = 'rf_env=staging&sys_id=123456789';

  const activeEnv = env;
  const activeDomains = domain === 'all' ? Object.keys(data.domains) : domain.split();
  const isStage = () => activeEnv === 'stage';
  const isProd = () => activeEnv === 'prod';
  const isMSN = (activeDomain) => activeDomain === 'MSN';

  // PROTOCOL
  const getProtocol = () => isStage() || isProd() ? 'https://' : 'http://';

  // HOST
  const getHost = (domain) => {
    const domain_link = data.domains[domain][activeEnv];

    // Stage
    if (isStage()) {
      if (isMSN(domain)) {
        return MSN_HOST;
      }
      return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com`
    }

    // Prod
    if (isProd()) {
      return domain_link
    }

    // Local
    return isMSN(domain) ? MSN_LOCALHOST : LOCALHOST;
  };

  // PATH
  const getPath = () => {
    let path = '';

    // Stage
    if (isStage()) {
      if (isMSN(domain)) {
        path += MSN_PATH;
      }
    }
    path += `/${video_type}`;

    return path;
  };

  // QUERY
  const getQuery = (domain) => {
    let query = '';
    let sign = '?';

    const addToQuery = (string) => {
      query += sign + string;
      sign = '&';
    };

    // Stage
    if (isStage()) {
      if (isMSN(domain)) {
        addToQuery(MSN_QUERY);
      } else {
        addToQuery(`staging_domain=${data.domains[domain][activeEnv]}`);
      }

    // Prod
    } else if (isProd()) {

    // Local
    } else {
      if (isMSN(domain)) {

      } else {
        addToQuery(`staging_domain=${data.domains[domain][activeEnv]}`);
      }
    }

    addToQuery(`force_traffic=${traffic}`);

    return query;
  };

  return activeDomains.map((activeDomain) => {
    getQuery(activeDomain);
    return {
      link: getProtocol() + getHost(activeDomain) + getPath(activeDomain) + getQuery(activeDomain),
      domain: activeDomain
    }
  });
}