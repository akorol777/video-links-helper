export const show_links = (env, domains) => ({
  type: 'SHOW_LINKS',
  env,
  domains
});

export const choose_env = (env) => ({
  type: 'CHOOSE_ENV',
  env
});