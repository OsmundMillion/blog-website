async function fetchUserProfile(){try{let e=await fetch("http://localhost:5000/user");if(!e.ok)throw Error("Failed to fetch user profile");let r=await e.json();displayUserProfile(r)}catch(e){console.error(e),displayProfileError()}}function displayUserProfile(e){let r=document.getElementById("user-profile");r&&(r.innerHTML=`
    <img src="${e.avatar}" alt="User Avatar" />
    <h3>${e.username}</h3>
    <p>${e.bio}</p>
  `)}function displayProfileError(){let e=document.getElementById("user-profile");e&&(e.innerHTML=`
    <p class="error-message">
      Failed to load user profile.
    </p>
  `)}document.addEventListener("DOMContentLoaded",()=>{fetchUserProfile()});
//# sourceMappingURL=main.df4d9535.js.map
