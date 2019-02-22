const linksReducerDefaultState = {
  env: 'local',
  domain: 'all'
};

export default (state = linksReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHOOSE_ENV':
      return {
        ...state,
        env: action.env
      };

    case 'CHOOSE_DOMAIN':
      return {
        ...state,
        domain: action.domain
      };

    default:
      return state;
  }
};