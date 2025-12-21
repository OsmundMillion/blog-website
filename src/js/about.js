function confirmLogout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "login.html";
  }
}

// Active page highlight
var navLinks = document.querySelectorAll("nav a");
var currentPage = window.location.pathname.split("/").pop();
navLinks.forEach(function (link) {
  if (link.href.includes(currentPage)) {
    link.classList.add("active");
  }
});
