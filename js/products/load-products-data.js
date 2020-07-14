'use strict'
import { createContent, deleteContent, createRequest, displayErrorMessage, deleteErrorMessage } from './set-product-list.js';
import { dataURL } from './urls.js';

const categoryName = [ //name of category
    'We recommend', 'Pizza', 'Sushi',
    'Soups'
];

const menuPoint = document.querySelectorAll('.navigation-menu__point'); //navigation menu points and logotype point(refers to a main page)
let requestResponse = '';
//event listener for loading initial content
document.addEventListener("DOMContentLoaded", function () {
    requestResponse = createRequest(dataURL[0]);
    requestResponse.then(data => {
        createContent(categoryName[0], data);
    }).catch(() => { //deletes all content in initial load and adds error message
        displayErrorMessage();
    });
});

//loop for loading content
for (const [index, point] of menuPoint.entries()) {
    point.addEventListener('click', function () {

        requestResponse = createRequest(dataURL[index]);
        requestResponse.then(data => {
            deleteContent();
            deleteErrorMessage();
            createContent(categoryName[index], data); //adds content
            
        }).catch(() => { //if during loading content error was happened, deletes all content and adds error message
            deleteContent();
            displayErrorMessage();
        });
    });
}