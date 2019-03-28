export default (data) => {
  const {
    isStage,
    isProd
  } = data;

  return isStage() || isProd() ? 'https://' : 'http://';
}