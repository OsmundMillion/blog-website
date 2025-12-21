async function fetchPosts(){showLoading();try{let t=await fetch("http://localhost:5000/posts"),e=await t.json();console.log("POSTS FROM SERVER:",e),displayPosts(e)}catch(t){alert("Failed to load posts.")}finally{hideLoading()}}function displayPosts(t){let e=document.getElementById("posts-container");if(!e)return void console.error("posts-container not found in DOM");if(!t||0===t.length){e.innerHTML="<p>No posts available.</p>";return}e.innerHTML="",t.forEach(t=>{console.log("Rendering post:",t);let o=document.createElement("article");o.classList.add("post"),o.innerHTML=`
      <h3>${t.title}</h3>
      <p><strong>Author:</strong> ${t.author}</p>
      <p><strong>Date:</strong> ${t.date}</p>
      <p><strong>Category:</strong> ${t.category}</p>
      <p>${t.content}</p>

      <button class="view-comments-btn" data-post-id="${t.id}">
        View Comments
      </button>

      <div id="comments-${t.id}" class="comments-container"></div>

      <section class="add-comment-section">
        <textarea id="comment-input-${t.id}" placeholder="Write your comment..."></textarea>
        <button class="submit-comment-btn" data-post-id="${t.id}">
          Add Comment
        </button>
      </section>
    `,e.appendChild(o)})}document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("refresh-posts");t&&t.addEventListener("click",()=>{document.getElementById("posts-container").innerHTML="",fetchPosts()}),fetchPosts()});
//# sourceMappingURL=main.31114e76.js.map
