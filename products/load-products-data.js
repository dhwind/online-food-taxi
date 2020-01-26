'use strict'
import {
    createContent,
    deleteContent,
    createRequest
} from './set-product-list.js';

//name of category
const categoryName = [
    'We recommend', 'Pizza', 'Sushi',
    'Burgers', 'Noodles', 'Salads',
    'Soups', 'Cakes', 'Drinks'
];
//URLs with data of JSON files
const dataURL = [
    'http://127.0.0.1:5500/products/products-lists/promotions.json',
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

const contentBlock = document.querySelector('.content');
const errorMessage = document.createElement('p');

errorMessage.setAttribute('class', 'error-message');
errorMessage.innerHTML = `ERROR 404! Wrong URL adress.`;

let requestResponse = '';
//event listener for loading initial content
document.addEventListener("DOMContentLoaded", function () {
    requestResponse = createRequest(dataURL[0]);
    requestResponse.then(data => {
        deleteContent();
        createContent(categoryName[0], data);
    }).catch(() => { //deletes all content in initial load and adds error message
        deleteContent();
        contentBlock.appendChild(errorMessage);
    });
});

//loop for loading content
for (const [index, point] of menuPoint.entries()) {
    point.addEventListener('click', function () {

        requestResponse = createRequest(dataURL[index]);
        requestResponse.then(data => {
            deleteContent();
            createContent(categoryName[index], data); //adds content 
        }).catch(() => { //if during loading content error was happened, deletes all content and adds error message
            deleteContent();

            if (!contentBlock.contains(errorMessage)) { //checks does the content block already have error message
                contentBlock.appendChild(errorMessage);
            }
        });
    });
}