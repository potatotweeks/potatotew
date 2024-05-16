function toggleForm(formType) {
    if (formType === 'register') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    } else {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    }
}

function login() {
    // Add logic for handling login, e.g., check credentials
    alert("Logged in successfully!");
    window.location.href = "index.html"; // Redirect to index.html
}

function register() {
    // Add logic for handling registration, e.g., store user details
    alert("Registered successfully! You can now log in.");
    window.location.href = "index.html"; // Redirect to index.html
}