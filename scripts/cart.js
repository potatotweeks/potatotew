let cartItem = '';

let html = `<div class="cart-item" id="product1">
<img src="photos/potatopc.webp" alt="potato pc">
<div class="item-details">
    <h1>Potato tweak</h1>
</div>
<button class="button" onclick="removeFromCart('product1')">Remove</button>
</div>`

updateCart();

function updateCart(){
    cartItem = localStorage.getItem('cartItem');

    if(cartItem === 'product1'){
        document.querySelector('.products').innerHTML = html;
        document.querySelector('.checkout-button').classList.remove('unclickable');
    } else{
        document.querySelector('.checkout-button').classList.add('unclickable');
    }
}

function removeFromCart() {
    let cartItemElement = document.querySelector('.cart-item');

    if (cartItemElement) {
        cartItemElement.remove();
        localStorage.removeItem('cartItem')
        alert("Product removed from the cart!");
        document.querySelector('.checkout-button').classList.add('unclickable');
        cartItem = '';
    }
}

function checkout() {
    if(cartItem === 'product1'){
        window.location.href = "checkout.html";
    }
}