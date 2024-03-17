import styles from './style.css'

let prdName = document.querySelector('.productDescriptionHolder>.productTitle').textContent;

console.log(prdName);

let prdPrice = parseFloat(document.querySelector('.priceHolder>#price')
        .textContent.slice(document.querySelector('.priceHolder>#price')
        .textContent.indexOf('$')+1));
console.log(prdPrice);

let prdForm = document.querySelector('.product-form');
console.log(prdForm);
let btnMinus = prdForm.querySelectorAll('button')[0];
let quantityInput = prdForm.querySelector('input');
let btnPlus = prdForm.querySelectorAll('button')[1];
console.log(btnMinus);
console.log(quantityInput);
console.log(btnPlus);

btnMinus.addEventListener('click', decreaseQuantity=>{
    let value = parseInt(quantityInput.value);
    console.log(value);
    if(value>=1){

        value-=1;
        console.log(value);
    }
    else{

        value=0;
        console.log(value);
    }
    console.log(value);

    quantityInput.value=value;

});
btnPlus.addEventListener('click', increaseQuantity=>{
    let value = parseInt(quantityInput.value);
    if(value <= 100){
        value+=1;
        console.log(value);
    }
    else{
        value=100;
        console.log(value);
    }
    console.log(value);
    quantityInput.value=value;

});



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