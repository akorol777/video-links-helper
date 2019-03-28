export default (activeDomain, dataFromSelector) => {
  const {
    data,
    env,
    isStage,
    isProd,
    pr_num,
    isMSN,
    MSN_HOST,
    MSN_LOCALHOST,
    LOCALHOST
  } = dataFromSelector;

  const domain_link = data.domains[activeDomain][env];

  // Stage
  if (isStage()) {
    if (isMSN(activeDomain)) {
      return MSN_HOST;
    }
    return `streaming-engine-stagi-pr-${pr_num}.herokuapp.com`
  }

  // Prod
  if (isProd()) {
    return domain_link
  }

  // Local
  return isMSN(activeDomain) ? MSN_LOCALHOST : LOCALHOST;
}