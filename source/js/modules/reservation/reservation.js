import {mobileChecker} from '../../utils/mobile-checker';
import {addMobileStyles} from './mobile-styles-toggle';

const rooms = document.querySelectorAll('[data-room]');

const onButtonReservationClick = (evt) => {
  const button = evt.currentTarget;
  const room = button.closest('[data-room]');
  button.classList.toggle('is-pressed');

  if (!mobileChecker()) {
    return;
  }

  if (button.classList.contains('is-pressed')) {
    room.classList.add('is-reserved');
  }
};

const onRoomMouseleave = (evt, buttonReservation) => {
  const room = evt.currentTarget.parentNode;

  if (buttonReservation.classList.contains('is-pressed')) {
    room.classList.add('is-reserved');
  }
};

const onRoomClick = (evt, buttonReservation) => {
  if (evt.target.classList.contains('room__reservation-link') || evt.target === buttonReservation) {
    return;
  }

  const roomChild = evt.currentTarget;
  const room = roomChild.parentNode;

  if (room.classList.contains('is-reserved')) {
    room.classList.remove('is-reserved');
    buttonReservation.classList.remove('is-pressed');
  }
};

const initReservation = () => {
  if (!rooms || !rooms.length) {
    return;
  }

  rooms.forEach((room) => {
    const buttonReservation = room.querySelector('[data-button-book]');
    const roomChild = room.children[0];

    roomChild.addEventListener('mouseleave', (evt) => {
      onRoomMouseleave(evt, buttonReservation);
    });
    roomChild.addEventListener('click', (evt) => {
      onRoomClick(evt, buttonReservation);
    });
    buttonReservation.addEventListener('click', onButtonReservationClick);
    addMobileStyles(room);
  });
};

export {initReservation};
