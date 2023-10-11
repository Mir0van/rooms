import {initReservation} from './modules/reservation/reservation';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  initReservation();

  window.addEventListener('load', () => {
    // контент не участвующий в работе первого экрана
  });
});
