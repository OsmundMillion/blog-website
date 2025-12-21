document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const errorMessage = document.getElementById("error-message");
  const redirectLink = document.getElementById("loginRedirect");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    emailError.textContent = "";
    passwordError.textContent = "";
    errorMessage.textContent = "";

    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = 'Email must include "@".';
      valid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      valid = false;
    }

    if (!valid) return;

    // Mock credentials
    const mockEmail = "samuel@example.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      const user = {
        username: "samuel_kelly",
        bio: "A tech enthusiast exploring the intersections of AI, health, and sustainability.",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      };

      localStorage.setItem("user", JSON.stringify(user));
      redirectLink.click();
    } else {
      errorMessage.textContent = "Invalid email or password.";
    }
  });

  emailInput.addEventListener("input", function () {
    emailError.textContent = "";
  });

  passwordInput.addEventListener("input", function () {
    passwordError.textContent = "";
  });
});
