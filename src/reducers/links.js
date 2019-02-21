const linksReducerDefaultState = '';
const data = require('../JSON/data.json');

export default (state = linksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_LINKS':
      console.log(state);
      const LOCALHOST = 'localhost:3000';
      const activeEnv = action.env;
      const isStage = () => activeEnv === 'stage';
      const isProd = () => activeEnv === 'prod';

      const getProtocol = () => isStage() || isProd() ? 'http://' : 'https://';

      const getHost = (domain) => {
        const domain_link = data.domains[domain][activeEnv];

        if (isStage()) {
          const pr_num = 2129;
          return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com?staging_domain=${domain_link}`
        }

        if (isProd()) {
          return domain_link
        }

        return `${LOCALHOST}?staging_domain=${domain_link}`;
      };

      return action.domains.map((domain) => {
        return {
          link: getProtocol() + getHost(domain),
          domain: domain
        }
      });

    default:
      return state;
  }
};