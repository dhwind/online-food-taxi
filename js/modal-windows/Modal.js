class Modal {
    constructor(modalWindow, targetElement) {
        this.mainModalWindow = document.querySelector('.main-modal-window');
        this.btnCloseModalWindow = document.querySelectorAll('.close-modal-window');
        this.modalWindow = modalWindow;
        this.targetElement = targetElement;
        this.displayModalWindow = this.displayModalWindow.bind(this);
        this.closeModalWindow = this.closeModalWindow.bind(this);

        this.mainModalWindow.addEventListener('click', this.closeModalWindow);
        this.targetElement.addEventListener('click', this.displayModalWindow);
        this.btnCloseModalWindow.forEach(el => el.addEventListener('click', this.closeModalWindow));
    }

    displayModalWindow() {
        this.mainModalWindow.classList.add('active-main-modal-window');
        this.modalWindow.classList.add('active-modal-window');
    }

    closeModalWindow(event) {
        for (let i = 0; i < this.mainModalWindow.children.length; i++) {
            if (event.target == this.mainModalWindow || event.target == this.btnCloseModalWindow[i]) {
                this.mainModalWindow.classList.remove('active-main-modal-window');
                this.modalWindow.classList.remove('active-modal-window');
            }
        }
    }
}

export class Cart extends Modal {
    constructor(modalWindow, targetElement) {
        super(modalWindow, targetElement);
        this.productField = document.querySelector('.product-field');
        this.checkoutBtn = document.querySelector('.checkout-btn');
        this.totalPrice = document.querySelector('.total-price');
        this.countPrice = 0;
    }

    addInStorage(productItem) { //sets product items in localStorage
        this.productItem = [productItem.children[1].innerHTML, productItem.children[3].innerHTML];
        localStorage.setItem(productItem.getAttribute('id'), this.productItem);
        return productItem.getAttribute('id');
    }

    addContent(storageKey) { //creates cart items by data from localStorage and adds them in cart
        this.selectedProduct = document.createElement('div');
        this.selectedProduct.setAttribute('class', 'selected-product');
        this.selectedProduct.setAttribute('id', `${(typeof(storageKey) == "number") ? localStorage.key(storageKey) : storageKey}`);
        this.selectedProduct.innerHTML = `
                <p class="selected-product__title">${localStorage.getItem(this.selectedProduct.getAttribute('id')).split(',')[0]}</p>
                <span class="selected-product__border"></span>
                <p class="selected-product__price">${localStorage.getItem(this.selectedProduct.getAttribute('id')).split(',')[1]}</p>
                <span class="selected-product__border"></span>
                <div class="select-buttons">
                    <button class="select-buttons__buy">BUY NOW</button>
                    <button class="select-buttons__remove">REMOVE</button>
                </div>
            `;
        
        this.countPrice += +localStorage.getItem(this.selectedProduct.getAttribute('id')).split(',')[1].slice(0, -1);
        this.totalPrice.innerHTML = `Total price: ${this.countPrice}$`;
        this.productField.appendChild(this.selectedProduct);
    }

    deleteContent(indexBtn) { //deletes content by clicking on remove button
        this.selectedProduct = document.querySelectorAll('.selected-product');
        this.productPrice = document.querySelectorAll('.selected-product__price');
        this.selectedProduct.forEach((el, i) => {
            if (i == indexBtn) {
                el.remove();
                localStorage.removeItem(el.getAttribute('id'));
                this.totalPrice.innerHTML = `Total price: ${this.countPrice -= +this.productPrice[i].innerHTML.slice(0, -1)}$`;
            }
        });
    }

    emptyMessage() { //adds or remove empty message and checkout btn with total price depending on the content availability
        this.selectedProduct = document.querySelectorAll('.selected-product');
        this.emptyCart = document.querySelector('.cart-modal-window__empty');

        if (this.selectedProduct.length == 0) {
            this.totalPrice.classList.remove('total-price__active');
            this.checkoutBtn.classList.remove('checkout-btn__active');
            this.emptyCart.classList.add('cart-modal-window__empty__active');
        }
        else {
            this.totalPrice.classList.add('total-price__active');
            this.checkoutBtn.classList.add('checkout-btn__active');
            this.emptyCart.classList.remove('cart-modal-window__empty__active');
        }
    }
}