'use strict'
//slider

document.addEventListener('click', changeSlides);

function changeSlides() {
    const sliderImage = document.querySelectorAll('.slider-image');
    const sliderBtns = document.querySelectorAll('.slider-button');
    for (let [index, btn] of sliderBtns.entries()) {
        btn.addEventListener('click', function () {
            if (!sliderImage[index].classList.contains('slider-image__active')) { //adds active class if selected image hasn't it
                sliderImage[index].classList.add('slider-image__active');
                sliderImage.forEach(element => { //deletes active classes from unselected images
                    if(element != sliderImage[index]) {
                        element.classList.remove('slider-image__active');
                    }
                });
            }
        });
    }
}
//nav menu

const headerBtn = document.querySelector('.menu-btn');
const navigationMenu = document.querySelector('.navigation');

headerBtn.addEventListener('click', displayNavMenu);

function displayNavMenu() {

    (!navigationMenu.classList.contains('active-menu')) ? 
        navigationMenu.classList.add('active-menu') : 
        navigationMenu.classList.remove('active-menu');
}