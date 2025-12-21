document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("message");
  const clearFormBtn = document.getElementById("clearFormBtn");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;

    let valid = true;

    // Clear previous messages
    document.getElementById("fullname-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirmPassword-error").textContent = "";
    message.textContent = "";

    // Full name validation
    if (!fullname) {
      document.getElementById("fullname-error").textContent =
        "Full Name is required.";
      valid = false;
    }

    // Email validation
    if (!email) {
      document.getElementById("email-error").textContent =
        "Email is required.";
      valid = false;
    } else if (!email.includes("@")) {
      document.getElementById("email-error").textContent =
        'Email must include "@".';
      valid = false;
    }

    // Username validation
    if (!username) {
      document.getElementById("username-error").textContent =
        "Username is required.";
      valid = false;
    } else if (username.length < 3) {
      document.getElementById("username-error").textContent =
        "Username must be at least 3 characters long.";
      valid = false;
    }

    // Password validation
    if (!password) {
      document.getElementById("password-error").textContent =
        "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("password-error").textContent =
        "Password must be at least 6 characters long.";
      valid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      document.getElementById("confirmPassword-error").textContent =
        "Confirm Password is required.";
      valid = false;
    } else if (confirmPassword !== password) {
      document.getElementById("confirmPassword-error").textContent =
        "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      message.textContent = "Registration successful!";
      message.style.backgroundColor = "#d1fae5";
      message.style.color = "#0d9488";

      const userData = {
        fullname,
        email,
        username,
        password, // demo only
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  });

  // Clear form button
  clearFormBtn?.addEventListener("click", function () {
    form.reset();
    message.textContent = "";

    document.getElementById("fullname-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirmPassword-error").textContent = "";
  });
});
