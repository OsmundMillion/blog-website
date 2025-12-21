document.addEventListener("DOMContentLoaded", ()=>{
    const refreshBtn = document.getElementById("refresh-posts");
    if (refreshBtn) refreshBtn.addEventListener("click", ()=>{
        document.getElementById("posts-container").innerHTML = "";
        fetchPosts();
    });
    fetchPosts();
});
// Fetch posts from json-server
async function fetchPosts() {
    showLoading();
    try {
        const response = await fetch("http://localhost:5000/posts");
        const posts = await response.json();
        console.log("POSTS FROM SERVER:", posts);
        displayPosts(posts);
    } catch (error) {
        alert("Failed to load posts.");
    } finally{
        hideLoading();
    }
}
// Render posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts-container");
    if (!postsContainer) {
        console.error("posts-container not found in DOM");
        return;
    }
    if (!posts || posts.length === 0) {
        postsContainer.innerHTML = "<p>No posts available.</p>";
        return;
    }
    postsContainer.innerHTML = "";
    posts.forEach((post)=>{
        console.log("Rendering post:", post);
        const postElement = document.createElement("article");
        postElement.classList.add("post");
        postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p><strong>Author:</strong> ${post.author}</p>
      <p><strong>Date:</strong> ${post.date}</p>
      <p><strong>Category:</strong> ${post.category}</p>
      <p>${post.content}</p>

      <button class="view-comments-btn" data-post-id="${post.id}">
        View Comments
      </button>

      <div id="comments-${post.id}" class="comments-container"></div>

      <section class="add-comment-section">
        <textarea id="comment-input-${post.id}" placeholder="Write your comment..."></textarea>
        <button class="submit-comment-btn" data-post-id="${post.id}">
          Add Comment
        </button>
      </section>
    `;
        postsContainer.appendChild(postElement);
    });
}

//# sourceMappingURL=main.33901292.js.map
