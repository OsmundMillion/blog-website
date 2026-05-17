
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("message");
  const clearFormBtn = document.getElementById("clearFormBtn");

  if (!form) return;

  // If already logged in, redirect away
  if (Store.isLoggedIn()) {
    window.location.href = "main.html";
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let valid = true;

    // Clear previous messages
    clearErrors();
    message.textContent = "";

    // Full name validation
    if (!fullname) {
      showError("fullname-error", "Full Name is required.");
      valid = false;
    }

    // Email validation
    if (!email) {
      showError("email-error", "Email is required.");
      valid = false;
    } else if (!email.includes("@")) {
      showError("email-error", 'Email must include "@".');
      valid = false;
    }

    // Username validation
    if (!username) {
      showError("username-error", "Username is required.");
      valid = false;
    } else if (username.length < 3) {
      showError(
        "username-error",
        "Username must be at least 3 characters long."
      );
      valid = false;
    }

    // Password validation
    if (!password) {
      showError("password-error", "Password is required.");
      valid = false;
    } else if (password.length < 6) {
      showError(
        "password-error",
        "Password must be at least 6 characters long."
      );
      valid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      showError("confirmPassword-error", "Confirm Password is required.");
      valid = false;
    } else if (confirmPassword !== password) {
      showError("confirmPassword-error", "Passwords do not match.");
      valid = false;
    }

    if (!valid) return;

    // Register account via Store
    const result = Store.registerAccount(fullname, email, username, password);

    if (!result.success) {
      message.textContent = result.error;
      message.style.backgroundColor = "#fee2e2";
      message.style.color = "#dc2626";
      return;
    }

    // Success
    message.textContent = "Registration successful! Redirecting to login...";
    message.style.backgroundColor = "#d1fae5";
    message.style.color = "#0d9488";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });

  // Clear form button
  clearFormBtn?.addEventListener("click", function () {
    form.reset();
    message.textContent = "";
    clearErrors();
  });

  // ─── Helpers ─────────────────────────────────────────

  function showError(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function clearErrors() {
    [
      "fullname-error",
      "email-error",
      "username-error",
      "password-error",
      "confirmPassword-error",
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
  }
});