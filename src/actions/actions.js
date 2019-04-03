export const choose_env = (env) => ({
  type: 'CHOOSE_ENV',
  env
});

export const choose_domain = (domain) => ({
  type: 'CHOOSE_DOMAIN',
  domain
});

export const choose_traffic = (traffic) => ({
  type: 'CHOOSE_TRAFFIC',
  traffic
});

export const choose_video_type = (video_type) => ({
  type: 'CHOOSE_VIDEO_TYPE',
  video_type
});

export const choose_page_type = (page_type) => ({
  type: 'CHOOSE_PAGE_TYPE',
  page_type
});

export const change_pr_num = (pr_num) => ({
  type: 'CHANGE_PR_NUM',
  pr_num
});


export const change_title = (title) => ({
  type: 'CHANGE_TITLE',
  title
});

export const toggle_show_label = (show_label) => ({
  type: 'TOGGLE_SHOW_LABEL',
  show_label
});