document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     Page Navigation Loading Message
     =============================== */
  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent === "Logout") return;

      event.preventDefault();

      if (!document.getElementById("page-loading")) {
        const loadingMessage = document.createElement("div");
        loadingMessage.id = "page-loading";
        loadingMessage.textContent = "Loading...";
        loadingMessage.style.position = "fixed";
        loadingMessage.style.top = "0";
        loadingMessage.style.left = "0";
        loadingMessage.style.width = "100%";
        loadingMessage.style.padding = "15px";
        loadingMessage.style.backgroundColor = "#f1f5f9";
        loadingMessage.style.color = "#1e3a8a";
        loadingMessage.style.textAlign = "center";
        loadingMessage.style.fontWeight = "bold";
        loadingMessage.style.zIndex = "9999";

        document.body.appendChild(loadingMessage);
      }

      setTimeout(function () {
        window.location.href = link.href;
      }, 1200);
    });
  });

  /* ===============================
     Dark Mode Theme Handling
     =============================== */
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (!darkModeToggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

});

