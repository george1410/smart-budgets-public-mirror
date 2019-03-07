export default () => {
  const iHeight = window.screen.height;
  const iWidth = window.screen.width;
  const pixelRatio = window.devicePixelRatio;

  // iPhone Xs Max
  if (iWidth === 414 && iHeight === 896 && pixelRatio === 3) {
    return true;
  }
  // iPhone Xr
  if (iWidth === 414 && iHeight === 896 && pixelRatio === 2) {
    return true;
  }
  // iPhone X, Xs
  if (iWidth === 375 && iHeight === 812 && pixelRatio === 3) {
    return true;
  }
  return false;
};
