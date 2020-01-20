import {
    productList
} from './product-list.js'

document.addEventListener('DOMContentLoaded', createProduct)

function createProduct() {
    const productItems = productList.map(element => {
        let elem = document.createElement("div");
        elem.setAttribute("class", "product");
        let productItem = `
            <img class="product__image" src="${element.photo}" alt="">
            <p class="product__name">${element.title}</p>
            <p class="product__description">${element.composition.map((descriptionStr, index) => {

                if(index == 0) {
                    descriptionStr = descriptionStr[0].toUpperCase() + descriptionStr.slice(1).toLowerCase();
                }
                
                else descriptionStr = descriptionStr.toLowerCase();
                return descriptionStr;
            }).join( ", " )}</p>
            <p class="product__price">${element.price}</p>
            <button class="product__btn"><i class="fas fa-plus"></i></button>
            `;
        elem.innerHTML = productItem;
        return elem;
    });

    let container = document.querySelector(".product-list");
    for (const product of productItems) {
        container.appendChild(product)
    }
}
