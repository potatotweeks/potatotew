updateCart();

function updateCart(){
    let cartItem = localStorage.getItem('cartItem');

    let html = `<div class="cart-item" id="product1">
        <img src="photos/potatopc.webp" alt="potato pc">
        <div class="item-details">
            <h1>Potato tweak</h1>
        </div>
        <button class="button" onclick="removeFromCart('product1')">Remove</button>
    </div>`

    if(cartItem === 'product1'){
        document.querySelector('.products').innerHTML = html;
    }
}

function removeFromCart(productId) {
    let cartItem = document.querySelector('.cart-item');

    if (cartItem) {
        cartItem.remove();
        localStorage.removeItem('cartItem')
        alert("Product removed from the cart!");
    }
}

function checkout() {
    window.location.href = "checkout.html";
}