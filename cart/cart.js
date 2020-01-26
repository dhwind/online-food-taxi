import { Modal } from '../modal-windows/Modal.js';

const cartElement = document.getElementById('cart-modal');
const cartModalWindow = document.querySelector('.cart-modal-window');

new Modal(cartModalWindow, cartElement);