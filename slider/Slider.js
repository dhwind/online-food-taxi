export class Slider {
    constructor() {
        this.contentBlock = document.querySelector('.content');
        this.slidesURL = 'http://127.0.0.1:5500/slider/slides/slides.json';
        this.slidesArr = fetch(this.slidesURL).then(response => response.json());
        this.sliderImages = document.createElement('div');
        this.sliderImages.setAttribute('class', 'slider');
    }

    createSlides() {
        this.contentBlock.prepend(this.sliderImages);
        this.slidesArr.then(data => {
            data.map((element, index) => {
                this.slide = document.createElement('div');
                (index == 0) ?
                    this.slide.setAttribute('class', 'slider-image slider-image__active'):
                    this.slide.setAttribute('class', 'slider-image');
                this.slide.innerHTML = `<img src="${element.url}">`;
                this.sliderImages.appendChild(this.slide);
            });
        });
        this.contentBlock.prepend(this.sliderImages);
    }

    createBtns() {
        this.sliderBtns = document.createElement('div');
        this.sliderBtns.setAttribute('class', 'slider-btns');

        this.slidesArr.then(data => {
            data.map((element, index) => {
                this.input = document.createElement('input');
                this.label = document.createElement('label');

                this.input.setAttribute('type', 'radio');
                this.input.setAttribute('name', 'slider button');
                this.input.setAttribute('id', `${element.id}`);
                if (index == 0) this.input.setAttribute('checked', '');

                this.label.setAttribute('class', 'slider-button');
                this.label.setAttribute('for', `${element.id}`);

                this.sliderBtns.appendChild(this.input);
                this.sliderBtns.appendChild(this.label);
            });

        });
        this.sliderImages.appendChild(this.sliderBtns);
    }
}