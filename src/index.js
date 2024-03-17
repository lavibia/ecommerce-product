import styles from './style.css'
let thumbnail = require("./assets/image-product-1-thumbnail.jpg");
let iconDelete = require('./assets/icon-delete.svg');


let prdName = document.querySelector('.productDescriptionHolder>.productTitle').textContent;

console.log(prdName);

let prdPrice = parseFloat(document.querySelector('.priceHolder>#price').textContent.slice(document.querySelector('.priceHolder>#price').textContent.indexOf('$') + 1));
let prdForm = document.querySelector('.product-form');
let btnMinus = prdForm.querySelectorAll('button')[0];
let quantityInput = prdForm.querySelector('input');
let btnPlus = prdForm.querySelectorAll('button')[1];
let btnNav = document.querySelector('#mobileMenu');
let navMobile = document.querySelector('#mobile-nav');
let btnAddToCArt = prdForm.querySelector('#btnCartSubmit');
let listCart = document.querySelector('#cartItems');
let btnCart = document.querySelector('#goToCart');
let cartHolder = document.querySelector('#cart-holder');

btnNav.addEventListener('click', openNav => {
    navMobile.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

btnCart.addEventListener('click', toggleCart => {
    if (cartHolder.classList.contains('active')) {

        cartHolder.style.display = 'none';
        cartHolder.classList.remove('active');
    } else {
        cartHolder.style.display = 'flex';
        cartHolder.classList.add('active');
    }
})

navMobile.children[0].children[0].addEventListener('click', closeNav => {
    navMobile.style.display = 'none';
})

btnMinus.addEventListener('click', decreaseQuantity => {
    let value = parseInt(quantityInput.value);
    console.log(value);
    if (value >= 1) {

        value -= 1;
        console.log(value);
    }
    else {

        value = 0;
        console.log(value);
    }
    console.log(value);

    quantityInput.value = value;

});
btnPlus.addEventListener('click', increaseQuantity => {
    let value = parseInt(quantityInput.value);
    if (value <= 100) {
        value += 1;
        console.log(value);
    }
    else {
        value = 100;
        console.log(value);
    }
    console.log(value);
    quantityInput.value = value;

});

btnAddToCArt.addEventListener('click', (event) => {
    event.preventDefault();
    let quantity = parseInt(quantityInput.value)
    if (quantity > 0 && quantity <= 100) {
        addProductToCart(quantity)
    }
    else {
        console.log('error');
    }
})


function addProductToCart(quantity) {
    if (listCart.children.length == 0) {
        listCart.display='flex';
        document.querySelector('#btnCheckout').style.display='block';
        document.querySelector('#emptyCart').style.display='none'
        createItemCart(quantity);
    }else{
        updateItemCart(quantity);
    }
}

function createItemCart(quantity) {
    let li = document.createElement('li');
    li.classList.add('cartItem');
    let img = document.createElement('img');
    img.src = thumbnail;
    img.alt = "Sneaker fall limited edition 1";
    li.appendChild(img);
    let divInfo = document.createElement('div');
    divInfo.classList.add('info');
    let pTitle = document.createElement('p');
    pTitle.textContent = prdName;
    let pPriceQuantity = document.createElement('p');
    pPriceQuantity.textContent = `$${prdPrice.toFixed(2)} x ${quantity}`;
    let pTotal = document.createElement('p');
    pTotal.classList.add('total');
    pTotal.textContent = `$${(prdPrice * quantity).toFixed(2)}`;
    divInfo.appendChild(pTitle);
    divInfo.appendChild(pPriceQuantity);
    divInfo.appendChild(pTotal);
    li.appendChild(divInfo);
    let btnDelete = document.createElement('button');
    btnDelete.id = 'deleteItem';
    btnDelete.type = 'button';
    btnDelete.ariaLabel = "delete item from cart";
    let imgDel = document.createElement('img');
    imgDel.src = iconDelete;
    imgDel.alt = "delete icon";
    btnDelete.appendChild(imgDel);

    btnDelete.addEventListener('click', deleteItemCart);
    li.appendChild(btnDelete);

    listCart.appendChild(li);


}

function updateItemCart(quantity){
    let li = listCart.children[0];
    let pQnty=li.querySelectorAll('.info>p')[1];
    pQnty.textContent=`$${prdPrice.toFixed(2)} x ${quantity}`;
    let total=li.querySelector('.total');
    total.textContent=`$${(prdPrice * quantity).toFixed(2)}`;
}
function deleteItemCart(){
    listCart.innerHTML='';
    listCart.display='none';
    document.querySelector('#btnCheckout').style.display='none';
    document.querySelector('#emptyCart').style.display='flex'
}

/* when menu nav is open apply to body 
    overflow: hidden; */
/*

// when thumbnail is click apply class .focus-img
Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
    -use media queries and grid
- See hover states for all interactive elements on the page
    -use css to style hove or elements
- Open a lightbox gallery by clicking on the large product image
    -WHEN user clicks on large product
    -DISPLAY lightbox gallery

- Switch the large product image by clicking on the small thumbnail images
    -WHEN user clicks on the small image
    -APPLY overlay and border on small image
    -CHANGE large image to small image
- Add items to the cart
    -WHEN user clicks on addToCart
    -IF numberOfItems is grater than 0
        -addToCart
    ELSE display error


- View the cart and remove items from it
    -WHEN users clicks on cart icon
    -DISPLAY cart content
    -WHEN users click on bin icon
    -DELETE itemfrom cart
*/