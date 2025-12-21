document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("logout-link");e&&e.addEventListener("click",e=>{e.preventDefault(),confirm("Are you sure you want to logout?")&&handleLogout()})});function handleLogout(){localStorage.removeItem("user"),localStorage.removeItem("userData"),window.location.href="login.html"}
//# sourceMappingURL=main.b5c8481b.js.map
