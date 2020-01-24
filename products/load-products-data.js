'use strict'
import {
    createProductsList,
    deleteProductsList,
    createRequest
} from './set-product-list.js';

//name of category
let categoryName = [
    'We recommend', 'Pizza', 'Sushi',
    'Burgers', 'Noodles', 'Salads',
    'Soups', 'Cakes', 'Drinks'
];
//URLs with data of JSON files
let dataURL = [
    'http://127.0.0.1:5500/products/products-lists/promotons.json',
    'http://127.0.0.1:5500/products/products-lists/products-pizza-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-sushi-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-burger-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-noodles-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-salad-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-soup-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-cake-list.json',
    'http://127.0.0.1:5500/products/products-lists/products-drink-list.json'
];

//navigation menu points and logotype point(refers to a main page)
const menuPoint = document.querySelectorAll('.navigation-menu__point');

let imagesSlider = document.querySelector('.slider');
let categorySort = document.querySelector('.sort');

let requestResponse = '';

let contentBlock = document.querySelector('.content');
let errorMessage = document.createElement('p');

errorMessage.setAttribute('class', 'error-message');
errorMessage.innerHTML = `ERROR 404! Wrong URL adress.`;

//event listener for loading initial content
document.addEventListener("DOMContentLoaded", function () {
    requestResponse = createRequest(dataURL[0]);
    requestResponse.then(data => {
        deleteProductsList();
        categorySort.classList.add('sort__remove');
        createProductsList(categoryName[0], data);
    }).catch(() => { //deletes all content in initial load and adds error message
        deleteProductsList();
        imagesSlider.classList.add('slider__remove');
        contentBlock.appendChild(errorMessage);
    });
});

//loop for loading content
for (let i = 0; i < menuPoint.length; i++) {
    menuPoint[i].addEventListener('click', function () {

        requestResponse = createRequest(dataURL[i]);
        requestResponse.then(data => {
            deleteProductsList();
            if (i == 0) { //deletes sort in main page and adds slider
                categorySort.classList.add('sort__remove');
                imagesSlider.classList.remove('slider__remove');
            } else { //deletes slider and adds sort on product pages
                categorySort.classList.remove('sort__remove');
                imagesSlider.classList.add('slider__remove');
            }

            createProductsList(categoryName[i], data); //adds content 
        }).catch(() => { //if during loading content error was happened, deletes all content and adds error message
            deleteProductsList();
            imagesSlider.classList.add('slider__remove');

            if (!contentBlock.contains(errorMessage)) { //checks does the content block already have error message
                contentBlock.appendChild(errorMessage);
            }
        });
    });
}