// Initialize Flatpickr for the expiry date with MM/YY format
flatpickr("#expiryDate", {
    dateFormat: "m/y", // Set to MM/YY format
    allowInput: true, // Allow manual input if needed
    static: true, // Calendar opens inline
    minDate: "today", // Disallow past dates
});

// Form validation
document.getElementById("paymentForm").addEventListener("submit", function (event) {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Check if credit card number is 16 digits without spaces
    if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert("Credit card number must be 16 digits without spaces.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Check if expiry date is in MM/YY format
    const expiryPattern = /^\d{2}\/\d{2}$/;
    if (!expiryPattern.test(expiryDate)) {
        alert("Expiry date must be in MM/YY format.");
        event.preventDefault();
        return;
    }

    // Check if CVV is 3 digits without spaces
    if (cvv.replace(/\s/g, '').length !== 3) {
        alert("CVV must be 3 digits without spaces.");
        event.preventDefault();
        return;
    }
});