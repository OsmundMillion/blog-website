document.addEventListener("DOMContentLoaded", ()=>{
    fetchUserProfile();
});
function fetchUserProfile() {
    const user = Store.getUser();
    if (user) displayUserProfile(user);
    else displayProfileError();
}
function displayUserProfile(user) {
    const container = document.getElementById("user-profile");
    if (!container) return;
    container.innerHTML = `
    <img src="${user.avatar}" alt="User Avatar" />
    <h3>${user.username}</h3>
    <p>${user.bio}</p>
  `;
}
function displayProfileError() {
    const container = document.getElementById("user-profile");
    if (!container) return;
    container.innerHTML = `
    <p class="error-message">
      Failed to load user profile.
    </p>
  `;
}

//# sourceMappingURL=main.fdd36c6d.js.map
