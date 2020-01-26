'use strict'
//creating product elements
import { Slider } from '../slider/Slider.js';


export function createContent(categoryName, productList) {
    if(categoryName == 'We recommend') {
        createSlider();
    }
    const contentBlock = document.querySelector('.content');
    contentBlock.appendChild(createCategory(categoryName));
    contentBlock.appendChild(createProductList(productList));
}

//deleting of excess product elements for loading new
export function deleteContent() {
    
}
//request to get data from JSON files
export function createRequest(URL) {
    const requestResponse = fetch(URL).then(response => response.json());
    return requestResponse;
}

function createSlider() {
    const slider = new Slider();
    slider.createSlides();
    slider.createBtns();
}

function createCategory(categoryName) {
    const categoryBlock = document.createElement('div');
    categoryBlock.setAttribute('class', 'category');
    categoryBlock.innerHTML = `<p class="category__name">${categoryName}</p>`;
    return categoryBlock;
}

function createProductList(productList) {
    const productItems = productList.map(element => {
        const elem = document.createElement("div");
        elem.setAttribute("class", "product");
        elem.innerHTML = `
            <img class="product__image" src="${element.photo}" alt="">
            <p class="product__name">
                ${element.title.split("")
                               .map((titleStr, index) => titleStr = (index === 0) ? 
                                        titleStr.toUpperCase() : 
                                        titleStr.toLowerCase()).join("")}
            </p>
            <p class="product__description">
            ${element.composition.map((descriptionStr, index) => descriptionStr = (index === 0) ? 
                    descriptionStr = descriptionStr[0].toUpperCase() + descriptionStr.slice(1).toLowerCase() : 
                    descriptionStr = descriptionStr.toLowerCase()).join( ", " )}
            </p>
            <p class="product__price">${element.price}$</p>
            <button class="product__btn" id="${element.id}"><i class="fas fa-plus"></i></button>
            <div class="product__weight"><img src="../images/products-images/weight.svg"><p>${element.weight}g</p></div>
            `;
        return elem;
    });

    const productListBlock = document.createElement('div');
    productListBlock.setAttribute('class', 'product-list');
    for (let product of productItems) {
        productListBlock.appendChild(product);
    }
    return productListBlock;
}