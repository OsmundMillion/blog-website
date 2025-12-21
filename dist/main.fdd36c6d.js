document.addEventListener("DOMContentLoaded", ()=>{
    fetchUserProfile();
});
async function fetchUserProfile() {
    try {
        const response = await fetch("http://localhost:5000/user");
        if (!response.ok) throw new Error("Failed to fetch user profile");
        const user = await response.json();
        displayUserProfile(user);
    } catch (error) {
        console.error(error);
        displayProfileError();
    }
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
