'use strict'
//creating product elements
export function createProductsList(categoryName, productList) {

    let categoryBlock = document.querySelector('.category');
    const listTitle = document.createElement('p');
    listTitle.innerHTML = `<p class="category__name">${categoryName}</p>`;
    if(listTitle.classList.contains('category__name__remove')){
        listTitle.classList.remove('category__name__remove');
    }
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

    let productListBlock = document.querySelector(".product-list");
    for (const product of productItems) {
        productListBlock.appendChild(product);
    }
}
//deleting of excess product elements for loading new
export function deleteProductsList() {

    const elem = document.querySelectorAll('.product');
    const listTitle = document.querySelector('.category__name');
    let categorySort = document.querySelector('.sort');

    categorySort.classList.add('sort__remove');
    listTitle.classList.add('category__name__remove'); //removing excess category name

    for(let i = 0; i < elem.length; i++) {
        elem[i].remove(); //removing excess elements
    }
}
//request to get data from JSON files
export function createRequest(URL) {
    let requestResponse = fetch(URL).then(response => response.json());
    return requestResponse;
}

