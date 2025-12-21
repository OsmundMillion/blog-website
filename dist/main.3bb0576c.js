document.addEventListener("DOMContentLoaded", ()=>{
    const logoutLink = document.getElementById("logout-link");
    if (!logoutLink) return;
    logoutLink.addEventListener("click", (event)=>{
        event.preventDefault();
        const confirmed = confirm("Are you sure you want to logout?");
        if (confirmed) handleLogout();
    });
});
function handleLogout() {
    // Clear user-related data
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    // Optional: clear everything
    // localStorage.clear();
    // Redirect to login page
    window.location.href = "login.html";
}

//# sourceMappingURL=main.3bb0576c.js.map
