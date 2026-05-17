document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (link.textContent === "Logout") return;
            event.preventDefault();
            if (!document.getElementById("page-loading")) {
                const loadingMessage = document.createElement("div");
                loadingMessage.id = "page-loading";
                loadingMessage.className = "loading-spinner";
                loadingMessage.textContent = "Loading...";
                document.body.appendChild(loadingMessage);
            }
            setTimeout(function() {
                window.location.href = link.href;
            }, 1200);
        });
    });
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            darkModeToggle.checked = true;
        }
        darkModeToggle.addEventListener("change", function() {
            if (darkModeToggle.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        });
    }
});

//# sourceMappingURL=main.aa69868b.js.map
