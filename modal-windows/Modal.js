export class Modal {
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
        if(event.target != this.modalWindow){
            this.mainModalWindow.classList.remove('active-main-modal-window');
            this.modalWindow.classList.remove('active-modal-window');
        }
    }
}