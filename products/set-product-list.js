'use strict'
//creating product elements
export function createProductsList(categoryName, productList) {

    let categoryBlock = document.querySelector('.category');
    const listTitle = document.createElement('p');
    listTitle.innerHTML = `<p class="category__name">${categoryName}</p>`;
    categoryBlock.prepend(listTitle);

    const productItems = productList.map(element => {
        let elem = document.createElement("div");
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
            <button class="product__btn"><i class="fas fa-plus"></i></button>
            `;
        return elem;
    });

    let container = document.querySelector(".product-list");
    for (const product of productItems) {
        container.appendChild(product);
    }
}
//deleting of excess product elements for loading new
export function deleteProductsList() {
    const elem = document.querySelectorAll('.product');
    const listTitle = document.querySelector('.category__name');
    let categorySort = document.querySelector('.sort');
    categorySort.classList.add('sort__remove');
    listTitle.remove();

    for(let i = 0; i < elem.length; i++) {
        elem[i].remove();
    }
}
//request to get data from JSON files
export function createRequest(method, URL) {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();
        request.open(method, URL);
        let response = '';
        request.responseType = 'json';

        request.onload = () => {
            if(request.status <= 400){
                response = request.response;
                res(response);
            }
            
            else rej(promiseError());
        }

        request.send();
    });
}

function promiseError(){

    deleteProductsList();
    
    let contentBlock = document.querySelector('.content');
    let errorMessage = document.createElement('p');
    errorMessage.setAttribute('class', 'error-message');
    errorMessage.innerHTML = `ERROR 404`;

    for(let i = 0; i < contentBlock.children.length; i++){
        console.log(contentBlock.children[i]);
    }

    contentBlock.appendChild(errorMessage);
}