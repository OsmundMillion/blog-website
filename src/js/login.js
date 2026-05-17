
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const errorMessage = document.getElementById("error-message");
  const redirectLink = document.getElementById("loginRedirect");

  if (!loginForm) return;

  // If already logged in, skip login page
  if (Store.isLoggedIn()) {
    window.location.href = "main.html";
    return;
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
    errorMessage.textContent = "";

    // Validate email
    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = 'Email must include "@".';
      valid = false;
    }

    // Validate password
    if (!password) {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (!valid) return;

    // Authenticate via Store (checks registered accounts + demo credentials)
    const result = Store.loginAccount(email, password);

    if (result.success) {
      Store.setSession(result.user);
      // Navigate to main page
      if (redirectLink) {
        redirectLink.click();
      } else {
        window.location.href = "main.html";
      }
    } else {
      errorMessage.textContent = result.error || "Invalid email or password.";
    }
  });

  emailInput.addEventListener("input", function () {
    emailError.textContent = "";
  });

  passwordInput.addEventListener("input", function () {
    passwordError.textContent = "";
  });
});