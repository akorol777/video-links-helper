export default (activeDomain, dataFromSelector) => {
  const {
    isStage,
    isProd,
    isMSN,
    data,
    env,
    traffic,
    MSN_QUERY
  } = dataFromSelector;

  let query = '';
  let sign = '?';

  const addToQuery = (string) => {
    query += sign + string;
    sign = '&';
  };

  // Stage
  if (isStage()) {
    if (isMSN(activeDomain)) {
      addToQuery(MSN_QUERY);
    } else {
      addToQuery(`staging_domain=${data.domains[activeDomain][env]}`);
    }

    // Prod
  } else if (isProd()) {

    // Local
  } else {
    if (isMSN(activeDomain)) {

    } else {
      addToQuery(`staging_domain=${data.domains[activeDomain][env]}`);
    }
  }

  addToQuery(`force_traffic=${traffic}`);

  return query;
}
