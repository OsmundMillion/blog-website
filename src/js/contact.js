document.addEventListener("DOMContentLoaded", () => {
  // Active page highlight
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Handle form submission
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Show success state
    form.reset();
    form.style.display = "none";

    const successDiv = document.getElementById("form-success");
    if (successDiv) {
      successDiv.style.display = "block";
    }
  });
});