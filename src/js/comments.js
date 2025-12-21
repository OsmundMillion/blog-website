// Event delegation for dynamic content
document.addEventListener("click", (event) => {
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

async function viewComments(postId) {
  showLoading("Fetching comments...");

  try {
    const response = await fetch(
      `http://localhost:5000/comments?postId=${postId}`
    );
    const comments = await response.json();
    displayComments(comments, postId);
  } catch (error) {
    alert("Failed to load comments.");
  } finally {
    hideLoading();
  }
}

function displayComments(comments, postId) {
  const container = document.getElementById(`comments-${postId}`);
  container.innerHTML = "";

  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
      <p><strong>${comment.author}</strong> <em>${comment.date}</em></p>
      <p>${comment.content}</p>
    `;
    container.appendChild(div);
  });
}

function submitComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  const text = input.value.trim();
  if (!text) return;

  const commentsSection = document.getElementById(`comments-${postId}`);

  // Optimistic UI update
  const tempComment = document.createElement("p");
  tempComment.textContent = `You: ${text}`;
  commentsSection.appendChild(tempComment);

  fetch("http://localhost:5000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      postId,
      author: "You",
      content: text,
      date: new Date().toISOString(),
    }),
  }).catch(() => {
    commentsSection.removeChild(tempComment);
    alert("Failed to submit comment.");
  });

  input.value = "";
}
