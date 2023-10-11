import {mobileChecker} from '../../utils/mobile-checker';

const addMobileStyles = (element) => {
  if (!mobileChecker()) {
    return;
  }

  const motivation = element.querySelector('.room__motivation');

  if (motivation) {
    motivation.classList.add('room__motivation--visible');
  }
};

export {addMobileStyles};
