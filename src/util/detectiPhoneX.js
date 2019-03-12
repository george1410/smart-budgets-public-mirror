export default () => {
  const iHeight = window.screen.height;
  const iWidth = window.screen.width;
  const pixelRatio = window.devicePixelRatio;
  const isiPhone = /iPhone/.test(navigator.platform);


  // iPhone Xs Max
  if (iWidth === 414 && iHeight === 896 && pixelRatio === 3 && isiPhone) {
    return true;
  }
  // iPhone Xr
  if (iWidth === 414 && iHeight === 896 && pixelRatio === 2 && isiPhone) {
    return true;
  }
  // iPhone X, Xs
  if (iWidth === 375 && iHeight === 812 && pixelRatio === 3 && isiPhone) {
    return true;
  }
  return false;
};
