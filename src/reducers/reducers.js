const data = require('../JSON/data.json');

const linksReducerDefaultState = {
  env: data.env[0],
  links: ''
};

export default (state = linksReducerDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_LINKS':
      const LOCALHOST = 'localhost:3000';
      const activeEnv = state.env;
      const domains= action.domains ||Object.keys(data.domains);
      const isStage = () => activeEnv === 'stage';
      const isProd = () => activeEnv === 'prod';

      const getProtocol = () => isStage() || isProd() ? 'http://' : 'https://';

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

      const activeLinks = domains.map((domain) => {
        return {
          link: getProtocol() + getHost(domain),
          domain: domain
        }
      });


      return {
        ...state,
        links: activeLinks,
      };

    case 'CHOOSE_ENV':
      return {
        ...state,
        env: action.env
      };

    default:
      return state;
  }
};