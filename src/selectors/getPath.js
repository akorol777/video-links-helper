export default (dataFromSelector) => {
  const {
    isStage,
    video_type,
    domain,
    isMSN,
    MSN_PATH
  } = dataFromSelector;

  let path = '';

  // Stage
  if (isStage()) {
    if (isMSN(domain)) {
      path += MSN_PATH;
    }
  }
  path += `/${video_type}`;

  return path;
};