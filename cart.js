// Function to remove item from the cart
function removeFromCart(productId) {
    // Check if the product is in the cart
    var cartItem = document.getElementById(productId);

    if (cartItem) {
        // Remove the product from the cart
        cartItem.remove();
        alert("Product removed from the cart!");
    } else {
        alert("Product not found in the cart!");
    }
}

// Function to proceed to checkout
function checkout() {
    // Redirect to the checkout.html page
    window.location.href = "checkout.html";
}