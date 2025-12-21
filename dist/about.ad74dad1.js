function confirmLogout(){confirm("Are you sure you want to logout?")&&(window.location.href="login.html")}var navLinks=document.querySelectorAll("nav a"),currentPage=window.location.pathname.split("/").pop();navLinks.forEach(function(n){n.href.includes(currentPage)&&n.classList.add("active")});
//# sourceMappingURL=about.ad74dad1.js.map
