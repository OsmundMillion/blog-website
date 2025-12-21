document.addEventListener("DOMContentLoaded", function() {
    const validPages = [
        "main.html",
        "about.html",
        "posts.html",
        "contact.html"
    ];
    const currentPage = window.location.pathname.split("/").pop();
    // Prevent redirect if the user is already on the 404 page
    if (!validPages.includes(currentPage) && currentPage !== "page-404.html") window.location.href = "page-404.html";
});

//# sourceMappingURL=page-404.58f2c9a2.js.map
