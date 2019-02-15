const envReducerDefaultState = '';

export default (state = envReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHOOSE_ENV':
      return action.env;

    default:
      return state;
  }
};