'use strict'

//slider

let sliderImage = document.querySelectorAll('.slider__image');
let sliderBtn = document.querySelectorAll('.slider-button');

for(let i = 0; i < sliderBtn.length; i++){
    sliderBtn[i].addEventListener('click', function(){
        if(sliderImage[i].classList.contains('slider__image__active') == false){
            sliderImage[i].classList.add('slider__image__active');
    
            sliderImage.forEach((element, index)=>{
                if(element != sliderImage[i]){
                    sliderImage[index].classList.remove('slider__image__active');
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

    if(navigationMenu.classList.contains('active-menu') == false){
        navigationMenu.classList.add('active-menu');
    }

    else navigationMenu.classList.remove('active-menu');
}