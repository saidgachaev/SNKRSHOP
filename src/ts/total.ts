// import { aside } from "./main";

export const aside:any = document.querySelector('.aside');

export const Total = (subtotalProps:any, taxProps:any = 100, shippingProps:any = 150) => { 

    const total = document.createElement('div');
    const subtotal = document.createElement('span');
    const tax = document.createElement('span');
    const shipping = document.createElement('span');
    const totalTitle = document.createElement('span');
    const subtotalPrice = document.createElement('span');
    const taxPrice = document.createElement('span');
    const shippingPrice = document.createElement('span');
    const totalTitlePrice = document.createElement('span');
    const totalPricesWrapper = document.createElement('div');
    const totalTitlesWrapper = document.createElement('div');

    subtotal.innerText = 'Subtotal';
    tax.innerText = 'Tax';
    shipping.innerText = 'Shipping';
    totalTitle.innerText = 'Total';

    subtotalPrice.innerText = '$ ' + subtotalProps;
    taxPrice.innerText = '$ ' + taxProps;
    shippingPrice.innerText = '$ ' + shippingProps;
    const totalProps = subtotalProps + taxProps + shippingProps;
    totalTitlePrice.innerText = totalProps;
    

    total.appendChild(totalTitlesWrapper);
    totalTitlesWrapper.append(subtotal, tax, shipping, totalTitle);
    total.appendChild(totalPricesWrapper);
    totalPricesWrapper.append(subtotalPrice, taxPrice, shippingPrice, totalTitlePrice);
    total.classList.add('total');
    totalTitlesWrapper.classList.add('total-titles-wrapper');
    subtotal.classList.add('subtotal');
    tax.classList.add('tax');
    shipping.classList.add('shipping');
    totalTitle.classList.add('total-title');
    totalPricesWrapper.classList.add('total-prices-wrapper');
    subtotalPrice.classList.add('subtotal-price');
    taxPrice.classList.add('tax-price');
    shippingPrice.classList.add('shipping-price');
    totalTitlePrice.classList.add('total-title-price');
    aside.appendChild(total);

    return total;
}

