const linksReducerDefaultState = {
  env: 'local',
  links: '',
  domain: ''
};

export default (state = linksReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHOOSE_ENV':
      return {
        ...state,
        env: action.env
      };

    default:
      return state;
  }
};