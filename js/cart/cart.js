import { Cart } from '../modal-windows/Modal.js';

const cartElement = document.getElementById('cart-modal');
const cartModalWindow = document.querySelector('.cart-modal-window');
const cartContent = new Cart(cartModalWindow, cartElement);

document.addEventListener('click', addInCart);
document.addEventListener('click', isInCart, {once: true});
document.addEventListener('click', deleteFromCart);

function addInCart() {

    const productBtns = document.querySelectorAll('.product__btn');
    for (let btn of productBtns) {
        btn.onclick = function () {
            if (!localStorage.getItem(btn.parentNode.getAttribute('id'))){
                cartContent.addContent(cartContent.addInStorage(btn.parentNode));
                cartContent.emptyMessage();
            }
        }
    }
}
function isInCart(){ //saves undeleted cart items in cart after reloading
    for(let i = 0; i < localStorage.length; i++){
        cartContent.addContent(i);
        cartContent.emptyMessage();
    }
}

function deleteFromCart() {
    const removeBtns = document.querySelectorAll('.select-buttons__remove');
    for (let [indexBtn, btn] of removeBtns.entries()) {
        btn.onclick = function () {
            cartContent.deleteContent(indexBtn);
            cartContent.emptyMessage();
        }
    }   
}