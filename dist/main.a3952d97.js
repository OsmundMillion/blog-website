document.addEventListener("click", (event)=>{
    // View comments
    if (event.target.classList.contains("view-comments-btn")) {
        const postId = event.target.dataset.postId;
        viewComments(postId);
    }
    // Submit comment
    if (event.target.classList.contains("submit-comment-btn")) {
        const postId = event.target.dataset.postId;
        submitComment(postId);
    }
});
function viewComments(postId) {
    showLoading("Fetching comments...");
    try {
        // Read directly from localStorage via Store
        const comments = Store.getCommentsByPostId(postId);
        displayComments(comments, postId);
    } catch (error) {
        alert("Failed to load comments.");
        console.error(error);
    } finally{
        hideLoading();
    }
}
function displayComments(comments, postId) {
    const container = document.getElementById(`comments-${postId}`);
    if (!container) return;
    container.innerHTML = "";
    if (comments.length === 0) {
        container.innerHTML = "<p><em>No comments yet. Be the first!</em></p>";
        return;
    }
    comments.forEach((comment)=>{
        const div = document.createElement("div");
        div.classList.add("comment");
        const displayDate = comment.date ? new Date(comment.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        }) : "";
        div.innerHTML = `
      <p><strong>${comment.author}</strong> <em>${displayDate}</em></p>
      <p>${comment.content}</p>
    `;
        container.appendChild(div);
    });
}
function submitComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    if (!text) return;
    // Get current logged-in user's name
    const session = Store.getSession();
    const author = session?.username || "You";
    // Save to localStorage via Store
    const newComment = Store.addComment(postId, author, text);
    const commentsSection = document.getElementById(`comments-${postId}`);
    const placeholder = commentsSection.querySelector("em");
    if (placeholder) commentsSection.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
    <p><strong>${newComment.author}</strong> <em>Just now</em></p>
    <p>${newComment.content}</p>
  `;
    commentsSection.appendChild(div);
    input.value = "";
}

//# sourceMappingURL=main.a3952d97.js.map
