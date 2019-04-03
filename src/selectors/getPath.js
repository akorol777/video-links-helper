export default (dataFromSelector) => {
  const {
    isStage,
    video_type,
    domain,
    isMSN,
    page_type_path,
    MSN_PATH
  } = dataFromSelector;

  const addToPath = string => {
    if (!string.length) {
      return;
    }

    return path += `/${string}`
  };

  let path = '';

  // Stage
  if (isStage()) {
    if (isMSN(domain)) {
      path += MSN_PATH;
    }
  }

  addToPath(video_type);
  addToPath(page_type_path);

  return path;
};