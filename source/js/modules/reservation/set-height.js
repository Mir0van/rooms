const padding = {
  desktop: 23,
  tablet: 25,
  mobile: 22,
};

const breakpointDesktop = window.matchMedia('(min-width:1280px)');
const breakpointTablet = window.matchMedia('(max-width:1279px)');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const setMinHeight = (element, indent) => {
  const infoElement = element.querySelector('.room__info-wrapper');
  const parentInfoElement = infoElement.parentNode;

  infoElement.style.minHeight = `${parentInfoElement.offsetHeight + indent}px`;
};

const initMinHeight = (element) => {
  if (breakpointMobile.matches) {
    setMinHeight(element, padding.mobile);
    return;
  }

  if (breakpointTablet.matches) {
    setMinHeight(element, padding.tablet);
    return;
  }

  if (breakpointDesktop.matches) {
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

  breakpointTablet.addEventListener('change', () => {
    setMaxHeight(element);

    if (breakpointDesktop.matches) {
      setMinHeight(element, padding.desktop);
      return;
    }

    setMinHeight(element, padding.tablet);
  });

  breakpointMobile.addEventListener('change', () => {
    setMaxHeight(element);

    if (breakpointMobile.matches) {
      setMinHeight(element, padding.mobile);
      return;
    }

    setMinHeight(element, padding.tablet);
  });
};

export {setBlokHeight};
