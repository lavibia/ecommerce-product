(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,':root {\n    --primary-orange: hsl(26, 100%, 55%);\n    --primary-pale-orange: hsl(25, 100%, 94%);\n\n    --neutral-verydark-blue: hsl(220, 13%, 13%);\n    --neutral-dark-blue: hsl(219, 9%, 45%);\n    --neutral-blue: hsl(220, 14%, 75%);\n    --neutral-light-blue: hsl(223, 64%, 98%);\n    --white: hsl(0, 0%, 100%);\n    --black: hsl(0, 0%, 0%);\n    --lightbox-bg-color: hsla(0, 0%, 0%, 0.75);\n}\n\n\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.sr-only {\n    display: none;\n    /* position: absolute;\n    left: -10000px;\n    top: auto;\n    width: 1px;\n    height: 1px;\n    overflow: hidden; */\n}\n\n.hidden {\n    display: none;\n}\n\nbody {\n    font-family: "Kumbh Sans", sans-serif;\n    width: 100%;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 25px;\n    height: min-content;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(12, 1fr);\n}\n\n#desktop-nav,\n.desktop-slideholder,\nheader hr {\n    display: none;\n}\n\n#mobile-nav {\n    display: none;\n    position: fixed;\n    left: 0;\n    top: 0;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    transition: 0.3s;\n    box-shadow:\n        0 10px 27px rgba(0, 0, 0, 0.05);\n    background-color: var(--lightbox-bg-color);\n    z-index: 9999;\n}\n\n#mobile-nav .nav-container{\n   \n    width: 66vw;\n    padding: 25px;\n    height: 100%;\n    background-color: var(--white);\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 26px;\n}\n#mobile-nav ul{\n    margin-top: 40px;\n    list-style-type: none;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 26px;\n    \n}\n#mobile-nav li{\n    margin: 10px 0px;\n}\nheader {\n    padding: 24px;\n    grid-area: 1/1/2/7;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#logo {\n    object-fit: contain;\n}\n\nheader button,\n.nav-container button {\n    border: none;\n    background: none;\n}\n\n#mobileMenu {\n    margin-right: 7px;\n}\n\n#cart-holder{\n    display:none;\n    gap: 10px;\n    position: absolute;\n    right: 8px;\n    top: 85px;\n    flex-direction: column;\n    width: 360px;\n    height: 256px;\n    transition: 0.3s;\n    \n    box-shadow:0px 3px 8px hsla(0, 0%, 48%, 0.75);\n    background-color: var(--white);\n    z-index: 99;\n    padding: 16px;\n    border-radius: 10px;\n    border: 2px solid var(--neutral-light-blue);\n}\n#cart-holder #cartItems{\n    display: none;\n    margin: 0px;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    list-style-type: none;\n    gap: 10px;\n}\n\n#cartItems li{\n    padding: 0px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 5px;\n}\n.cartItem img{\n    width:50px;\n    height: 50px;\n        object-fit: cover;\n        border-radius: 4px;\n}\n.cartItem .info{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n.info p:first-of-type{\n    grid-area: 1/1/2/3;\n}\n.cartItem p{\n    font-size: 16px;\n    color: var(--neutral-dark-blue);\n}\n.cartItem .total{\n    font-weight: 700;\n    color: var(--black);\n}\n#deleteItem{\n    border: none;\n    background: none;\n}\n#deleteItem img{\n    width: 14px;\n    height: 15px;\n    object-fit:contain;\n\n    border-radius: 0px;\n}\n\n#cart-holder #btnCheckout{\n    display: none;\n    color: var(--white);\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom:  10px;\n    gap: 10px;\n    height: 56px;\n    width: 100%;\n    border: none;\n    border-radius: 10px;\n    background-color: var(--primary-orange);\n}\n#cart-holder #emptyCart{\n    font-weight: 700;\n       height: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--neutral-dark-blue);\n}\n#cart-holder h5{\n    font-size: 16px;\n}\n#cart-holder hr{\n    display: block;\n    border: 1px solid var(--neutral-light-blue);\n}\n\n\n#profile {\n    margin-left: 7px;\n}\n\n#profile img {\n    width: 22px;\n    height: 22px;\n}\n\n\nmain {\n    height: 100%;\n    grid-area: 2/1/12/7;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 0;\n}\n\n.mobile-slideholder {\n    width: 100%;\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(5, 60px);\n}\n\n.mobile-slideholder button {\n    margin: 5px;\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    border-radius: 50%;\n    border: none;\n    align-self: center;\n    justify-self: center;\n}\n\n.mobile-slideholder #previousImg {\n\n    grid-area: 3/1/4/2;\n}\n\n#previousImg img,\n#nextImg img {\n    height: 12px;\n    width: 6px;\n}\n\n.mobile-slideholder #nextImg {\n    grid-area: 3/6/4/7;\n\n}\n\n.mobile-slideholder .largeImages {\n    grid-area: 1/1/6/7;\n    z-index: -1;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.largeImages img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.productDescriptionHolder {\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 24px;\n}\n\n.productDescriptionHolder p {\n    color: var(--neutral-dark-blue);\n}\n\nh3 {\n    font-size: 12px;\n    letter-spacing: 1.85px;\n    color: var(--primary-orange);\n}\n\nh1 {\n    font-size: 28px;\n    line-height: 32px;\n}\n\n.priceHolder {\n    padding: 24px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr;\n\n}\n\n.priceHolder #price {\n    font-weight: 700;\n    font-size: 28px;\n    text-align: left;\n}\n\n.priceHolder #discount {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--primary-orange);\n    background-color: var(--primary-pale-orange);\n    width: fit-content;\n    padding: 0px 8px;\n    border-radius: 6px;\n    justify-self: end;\n}\n\n.priceHolder #oldprice {\n    font-size: 16px;\n    font-weight: 700;\n    color: var(--neutral-blue);\n    text-align: right;\n}\n\n.product-form {\n    padding: 24px;\n    gap: 12px;\n    display: flex;\n    flex-direction: column;\n}\n\n.item-quantity {\n    background-color: #F6F8FD;\n    height: 56px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    padding: 0px 24px;\n}\n\n.item-quantity button,\ninput {\n    border: none;\n    background: none;\n    width: 5ch;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    color: var(--black);\n    font-weight: 700;\n    font-size: 16px;\n    text-align: center;\n}\n\n#btnCartSubmit {\n    color: var(--white);\n    font-size: 16px;\n    font-weight: 700;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    height: 56px;\n    width: 100%;\n    border: none;\n    border-radius: 10px;\n    background-color: var(--primary-orange);\n}\n\n#btnCartSubmit .carticon {\n    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(24deg) brightness(101%) contrast(103%);\n}\n\nfooter {\n    grid-area: 12/1/13/7;\n    background-color: var(--neutral-dark-blue);\n    color: var(--white);\n    width: 100%;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: flex-end;\n\n}\n\nfooter a {\n    color: var(--white);\n}\n\n@media only screen and (min-width: 940px) {\n\n    #mobile-nav,\n    #mobileMenu,\n    .mobile-slideholder {\n        display: none;\n    }\n\n    body {\n        grid-template-rows: repeat(6, 1fr);\n    }\n\n    header {\n        max-width: 1110px;\n        justify-self: center;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n\n    .left-header {\n        grid-area: 1/1/2/2;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: flex-start;\n        gap: 50px;\n    }\n\n    .right-header {\n        grid-area: 1/2/2/3;\n        display: flex;\n        align-items: flex-start;\n        justify-content: end;\n    }\n\n    header hr {\n        width: 100%;\n        display: block;\n        grid-area: 2/1/3/3;\n        align-self: flex-start;\n        border: 1px solid var(--neutral-light-blue);\n    }\n\n    #desktop-nav {\n        display: flex;\n    }\n\n    #desktop-nav ul {\n        list-style: none;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        gap: 24px;\n    }\n\n    #desktop-nav li {\n        padding-bottom: 24px;\n    }\n\n    main {\n        grid-area: 2/1/6/7;\n        height: fit-content;\n        max-width: 1110px;\n        justify-self: center;\n        margin: 0px 8vw;\n        display: grid;\n        grid-template-columns: repeat(6, 1fr);\n        grid-template-rows: repeat(8, 65px);\n        column-gap: 70px;\n    }\n\n    footer {\n        grid-area: 6/1/7/7;\n    }\n\n    .desktop-slideholder {\n        grid-area: 1/1/9/4;\n        display: flex;\n        flex-direction: column;\n        gap: 24px;\n        justify-content: flex-start;\n\n    }\n\n    .largeImages img {\n        border-radius: 10px;\n    }\n\n    .desktop-slideholder .thumbnails {\n        display: flex;\n        flex-direction: row;\n        gap: 24px;\n    }\n\n    .focus-img{\n        opacity: 0.3;\n        border: 3px solid var(--primary-orange);\n       \n    }\n    .thumbnails img {\n        width: calc(25% - 18px);\n        height: 100%;\n        object-fit: cover;\n        border-radius: 10px;\n    }\n\n    .productDescriptionHolder {\n        grid-area: 1/4/6/7;\n    }\n\n    .priceHolder {\n        grid-area: 6/4/7/7;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        padding-top: 0px;\n        row-gap: 10px;\n    }\n\n    #price {\n        grid-area: 1/1/2/2;\n        margin-right: 24px;\n    }\n\n    #discount {\n        grid-area: 1/1/2/2;\n    }\n\n    .priceHolder #oldprice {\n        text-align: left;\n        grid-area: 2/1/3/2;\n    }\n\n    .product-form {\n        grid-area: 7/4/8/7;\n        display: flex;\n        flex-direction: row;\n\n    }\n\n    .product-form .item-quantity {\n        width: 145px;\n    }\n\n}\n\n/* ## Layout\n\nThe designs were created to the following widths:\n\n- Mobile: 375px\n- Desktop: 1440px\n\n> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.\n\n## Colors\n\n### Primary\n\n- Orange: hsl(26, 100%, 55%)\n- Pale orange: hsl(25, 100%, 94%)\n\n### Neutral\n\n- Very dark blue: hsl(220, 13%, 13%)\n- Dark grayish blue: hsl(219, 9%, 45%)\n- Grayish blue: hsl(220, 14%, 75%)\n- Light grayish blue: hsl(223, 64%, 98%)\n- White: hsl(0, 0%, 100%)\n- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)\n\n## Typography\n\n### Body Copy\n\n- Font size (paragraph): 16px\n\n### Font\n\n- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)\n- Weights: 400, 700 */',""]);const l=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var d=n[l],s=r.base?d[0]+r.base:d[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=t(p),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=o(g,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var d=r(n,o),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},331:(n,e,t)=>{n.exports=t.p+"1fd1f1f7d9f8ce5557b4.svg"},417:(n,e,t)=>{n.exports=t.p+"41da6fdd0ac384f6e068.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),l=t(56),d=t.n(l),s=t(540),c=t.n(s),p=t(113),u=t.n(p),g=t(208),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),e()(g.A,f),g.A&&g.A.locals&&g.A.locals;let h=t(417),m=t(331),x=document.querySelector(".productDescriptionHolder>.productTitle").textContent;console.log(x);let y=parseFloat(document.querySelector(".priceHolder>#price").textContent.slice(document.querySelector(".priceHolder>#price").textContent.indexOf("$")+1)),b=document.querySelector(".product-form"),v=b.querySelectorAll("button")[0],w=b.querySelector("input"),k=b.querySelectorAll("button")[1],C=document.querySelector("#mobileMenu"),S=document.querySelector("#mobile-nav"),j=b.querySelector("#btnCartSubmit"),I=document.querySelector("#cartItems"),q=document.querySelector("#goToCart"),E=document.querySelector("#cart-holder");function z(){I.innerHTML="",I.display="none",document.querySelector("#btnCheckout").style.display="none",document.querySelector("#emptyCart").style.display="flex"}C.addEventListener("click",(n=>{S.style.display="block",document.body.style.overflow="hidden"})),q.addEventListener("click",(n=>{E.classList.contains("active")?(E.style.display="none",E.classList.remove("active")):(E.style.display="flex",E.classList.add("active"))})),S.children[0].children[0].addEventListener("click",(n=>{S.style.display="none"})),v.addEventListener("click",(n=>{let e=parseInt(w.value);console.log(e),e>=1?(e-=1,console.log(e)):(e=0,console.log(e)),console.log(e),w.value=e})),k.addEventListener("click",(n=>{let e=parseInt(w.value);e<=100?(e+=1,console.log(e)):(e=100,console.log(e)),console.log(e),w.value=e})),j.addEventListener("click",(n=>{n.preventDefault();let e=parseInt(w.value);e>0&&e<=100?function(n){0==I.children.length?(I.display="flex",document.querySelector("#btnCheckout").style.display="block",document.querySelector("#emptyCart").style.display="none",function(n){let e=document.createElement("li");e.classList.add("cartItem");let t=document.createElement("img");t.src=h,t.alt="Sneaker fall limited edition 1",e.appendChild(t);let r=document.createElement("div");r.classList.add("info");let o=document.createElement("p");o.textContent=x;let i=document.createElement("p");i.textContent=`$${y.toFixed(2)} x ${n}`;let a=document.createElement("p");a.classList.add("total"),a.textContent=`$${(y*n).toFixed(2)}`,r.appendChild(o),r.appendChild(i),r.appendChild(a),e.appendChild(r);let l=document.createElement("button");l.id="deleteItem",l.type="button",l.ariaLabel="delete item from cart";let d=document.createElement("img");d.src=m,d.alt="delete icon",l.appendChild(d),l.addEventListener("click",z),e.appendChild(l),I.appendChild(e)}(n)):function(n){let e=I.children[0];e.querySelectorAll(".info>p")[1].textContent=`$${y.toFixed(2)} x ${n}`,e.querySelector(".total").textContent=`$${(y*n).toFixed(2)}`}(n)}(e):console.log("error")}))})()})();