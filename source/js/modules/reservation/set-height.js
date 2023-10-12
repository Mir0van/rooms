const padding = {
  desktop: 23,
  tablet: 25,
  mobile: 22,
};

const breakpointDesktop = window.matchMedia('(min-width:1280px)');
const breakpointTabletMax = window.matchMedia('(max-width:1279px)');
const breakpointTabletMin = window.matchMedia('(min-width:768px)');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const setMinHeight = (element, indent) => {
  const infoElement = element.querySelector('.room__info-wrapper');
  const parentInfoElement = infoElement.parentNode;

  infoElement.style.minHeight = `${parentInfoElement.offsetHeight + indent}px`;
};

const initMinHeight = (element) => {
  if (breakpointDesktop.matches) {
    setMinHeight(element, padding.desktop);
    return;
  }

  if (breakpointTabletMax.matches && breakpointTabletMin.matches) {
    setMinHeight(element, padding.tablet);
    return;
  }

  if (breakpointMobile.matches) {
    setMinHeight(element, padding.desktop);
    return;
  }
};

const setMaxHeight = (element) => {
  const infoElement = element.querySelector('.room__info-wrapper');
  infoElement.style.maxHeight = `${element.offsetHeight}px`;
};

const setBlokHeight = (element) => {
  initMinHeight(element);
  setMaxHeight(element);

  breakpointDesktop.addEventListener('change', () => {
    setMinHeight(element, padding.desktop);
    setMaxHeight(element);
  });
  breakpointTabletMin.addEventListener('change', () => {
    setMinHeight(element, padding.tablet);
    setMaxHeight(element);
  });
  breakpointTabletMax.addEventListener('change', () => {
    setMinHeight(element, padding.tablet);
    setMaxHeight(element);
  });
  breakpointMobile.addEventListener('change', () => {
    setMinHeight(element, padding.mobile);
    setMaxHeight(element);
  });
};

export {setBlokHeight};
