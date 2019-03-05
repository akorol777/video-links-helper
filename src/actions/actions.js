export const choose_env = (env) => ({
  type: 'CHOOSE_ENV',
  env
});

export const choose_domain = (domain) => ({
  type: 'CHOOSE_DOMAIN',
  domain
});


export const change_pr_num = (pr_num) => ({
  type: 'CHANGE_PR_NUM',
  pr_num
});

export const toggle_show_label = (show_label) => ({
  type: 'TOGGLE_SHOW_LABEL',
  show_label
});