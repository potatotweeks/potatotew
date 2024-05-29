// Function to redirect to the shopping cart page
function addToCart(productId) {
    // Check if the product is already in the cart
    let cartItem = localStorage.getItem('cartItem');

    if (cartItem === productId) {
        alert("This product is already in the cart!");
    } else {
        // Add the product to the cart
        localStorage.setItem('cartItem', productId);
        alert("Product added to the cart!");
    }
}

// Function to redirect to the cart page
function viewCart() {
    window.location.href = "cart.html";
}