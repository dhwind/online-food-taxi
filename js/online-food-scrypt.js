'use strict'
//slider

let sliderImage = document.querySelectorAll('.slider-image');
let sliderBtn = document.querySelectorAll('.slider-button');

for (let i = 0; i < sliderBtn.length; i++) {
    sliderBtn[i].addEventListener('click', function () {
        if (!sliderImage[i].classList.contains('slider-image__active')) {
            sliderImage[i].classList.add('slider-image__active');

            sliderImage.forEach(element => {
                if (element != sliderImage[i]) {
                    element.classList.remove('slider-image__active');
                }
            });
        }
    });
}

//nav menu

let headerBtn = document.querySelector('.menu-btn');
let navigationMenu = document.querySelector('.navigation');

headerBtn.addEventListener('click', displayNavMenu);

    function displayNavMenu() {

     if (!navigationMenu.classList.contains('active-menu')) {
          navigationMenu.classList.add('active-menu');
      } else navigationMenu.classList.remove('active-menu');
}