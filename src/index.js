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

let mobileSlideHolder = document.querySelector('.mobile-slideholder');
let mBtnPrevious = mobileSlideHolder.children[0];
let mBtnNext = mobileSlideHolder.children[2];
let mLargeImg = mobileSlideHolder.children[1].children;

let slideIndex = 1;
showSlide(slideIndex, mLargeImg);

mBtnPrevious.addEventListener('click', () => {
    showSlide(slideIndex -= 1, mLargeImg);
});
mBtnNext.addEventListener('click', () => {
    showSlide(slideIndex += 1, mLargeImg);
});

let desktopSlideHolder = document.querySelector('.desktop-slideholder');
let dLargeImg = desktopSlideHolder.children[0].children;
let dthumbnails = desktopSlideHolder.children[1].children;
for (let i = 0; i < dthumbnails.length; i++) {
    dthumbnails[i].addEventListener('click', () => {
        console.log('hi')
        showSlide(slideIndex = i + 1, dLargeImg);
        focusThumnail(slideIndex, dthumbnails);
    })
}
let lightbox = document.querySelector('.lightbox');
let btnCloseLightbox = lightbox.children[0];

btnCloseLightbox.addEventListener('click', closeLightbox);

for (let i = 0; i < dLargeImg.length; i++) {
    dLargeImg[i].addEventListener('click', () => {
        openLightbox(i);

    })
}

let lLargeImg = lightbox.children[1].children[1].children;
let lthumbnails = lightbox.children[2].children;
let lBtnPrevious = lightbox.children[1].children[0];
let lBtnNext = lightbox.children[1].children[2];
lBtnPrevious.addEventListener('click', () => {
    showSlide(slideIndex -= 1, lLargeImg);
    focusThumnail(slideIndex, lthumbnails)
});
lBtnNext.addEventListener('click', () => {
    showSlide(slideIndex += 1, lLargeImg);
    focusThumnail(slideIndex, lthumbnails)
});



function openLightbox(n) {
    lightbox.style.display = 'grid';
    document.body.style.overflow = 'hidden';
    showSlide(slideIndex = n + 1, lLargeImg);
    focusThumnail(slideIndex, lthumbnails)
}
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

for (let i = 0; i < lthumbnails.length; i++) {
    lthumbnails[i].addEventListener('click', () => {
        showSlide(slideIndex = i + 1, lLargeImg);
        focusThumnail(slideIndex, lthumbnails);
    })
}

function focusThumnail(n, thumbnailArray) {
    let i;
    if (n > thumbnailArray.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = thumbnailArray.length;
    }
    for (i = 0; i < thumbnailArray.length; i++) {
        thumbnailArray[i].classList.remove('focus-img');
    }
    thumbnailArray[slideIndex - 1].classList.add('focus-img');
}
function showSlide(n, slidesArray) {
    let i;

    if (n > slidesArray.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesArray.length;
    }
    for (i = 0; i < slidesArray.length; i++) {
        slidesArray[i].classList.add('hidden');
    }
    console.log(slidesArray[slideIndex - 1]);
    slidesArray[slideIndex - 1].classList.remove('hidden');
}

function addProductToCart(quantity) {
    document.getElementById('cartNotification').style.display = 'block'
    document.getElementById('cartNotification').textContent = quantity;
    if (listCart.children.length == 0) {
        listCart.display = 'flex';
        document.querySelector('#btnCheckout').style.display = 'block';
        document.querySelector('#emptyCart').style.display = 'none'
        createItemCart(quantity);

    } else {
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

function updateItemCart(quantity) {
    let li = listCart.children[0];
    let pQnty = li.querySelectorAll('.info>p')[1];
    pQnty.textContent = `$${prdPrice.toFixed(2)} x ${quantity}`;
    let total = li.querySelector('.total');
    total.textContent = `$${(prdPrice * quantity).toFixed(2)}`;
}
function deleteItemCart() {
    listCart.innerHTML = '';
    listCart.display = 'none';
    document.querySelector('#btnCheckout').style.display = 'none';
    document.querySelector('#emptyCart').style.display = 'flex';
    document.getElementById('cartNotification').style.display = 'none'
}