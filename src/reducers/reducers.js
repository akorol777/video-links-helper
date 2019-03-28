const linksReducerDefaultState = {
  env: 'local',
  domain: 'all',
  pr_num: 2158,
  show_label: true,
  traffic: 'paid',
  video_type: 'tv-shows'
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

    case 'CHOOSE_TRAFFIC':
      return {
        ...state,
        traffic: action.traffic
      };

    case 'CHOOSE_VIDEO_TYPE':
      return {
        ...state,
        video_type: action.video_type
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