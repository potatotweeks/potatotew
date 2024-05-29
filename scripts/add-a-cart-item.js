function addToCart(productId) {
    let cartItem = localStorage.getItem('cartItem');

    if (cartItem === 'product1') {
        alert("This product is already in the cart!");
    } else {
        localStorage.removeItem('cartItem');
        localStorage.setItem('cartItem', productId);
        alert("Product added to the cart!");
    }
}