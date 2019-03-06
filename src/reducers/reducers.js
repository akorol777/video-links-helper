const linksReducerDefaultState = {
  env: 'local',
  domain: 'all',
  pr_num: 2158,
  show_label: true
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

    case 'CHANGE_PR_NUM':
      return {
        ...state,
        pr_num: action.pr_num
      };

    case 'TOGGLE_SHOW_LABEL':
      return {
        ...state,
        show_label: action.show_label
      };

    default:
      return state;
  }
};