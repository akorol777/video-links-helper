import getProtocol from './getProtocol';
import getHost from './getHost';
import getPath from './getPath';
import getQuery from './getQuery';

const data = require('../JSON/data.json');

export default ({
    env = data.env[0],
    domain = 'all',
    pr_num,
    traffic = data.traffic[0],
    video_type = data.video_type[0],
    page_type = data[Object.keys(data)[0]]
  }) => {

  const dataToExport = {
    env,
    domain,
    pr_num,
    traffic,
    video_type,
    data,
    page_type_path: data.pages[page_type],
    LOCALHOST : 'localhost:3000',
    MSN_LOCALHOST : 'msn.lvh.me:3000/en-us/entertainment/rf-watch-online',
    MSN_HOST : 'int1.msn.com',
    MSN_PATH : '/en-us/entertainment/rf-watch-online',
    MSN_QUERY : 'rf_env=staging&sys_id=123456789',
    activeDomains : domain === 'all' ? Object.keys(data.domains) : domain.split(),
    isStage : () => env === 'stage',
    isProd : () => env === 'prod',
    isMSN : (activeDomain) => activeDomain === 'MSN'
  };

  return dataToExport.activeDomains.map((activeDomain) => {
    return {
      link:
        getProtocol(dataToExport) +
        getHost(activeDomain, dataToExport) +
        getPath(dataToExport) +
        getQuery(activeDomain, dataToExport),
      domain: activeDomain
    }
  });
}