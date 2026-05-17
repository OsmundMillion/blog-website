
//localStorage

const INITIAL_POSTS = [
  {
    id: "1",
    title: "Understanding Quantum Computing: A Beginner's Guide",
    content:
      "Quantum computing is a rapidly evolving field that promises to revolutionize the way we solve complex problems. In this post, we'll break down the basics of quantum mechanics and how it applies to computing. We'll also explore the potential future of this exciting technology and the challenges we face in making it a reality.",
    author: "Dr. Eleanor Murphy",
    date: "2025-12-10",
    category: "Technology",
  },
  {
    id: "2",
    title: "The Rise of Green Energy: What's Next?",
    content:
      "With the world shifting towards renewable energy sources, green energy is becoming an increasingly popular topic. This post dives into the advancements in solar, wind, and hydroelectric power, and discusses what we can expect in the next decade as the world continues to move towards sustainable energy solutions.",
    author: "James D. Reynolds",
    date: "2025-12-12",
    category: "Environment",
  },
  {
    id: "3",
    title: "The Future of Artificial Intelligence in Healthcare",
    content:
      "AI is transforming the healthcare industry by enabling faster diagnosis, personalized treatments, and more efficient management of patient data. In this post, we explore the potential impact of AI on medical practices, the ethical considerations, and how AI-powered tools are already making a difference in the field.",
    author: "Dr. Maria Li",
    date: "2025-12-15",
    category: "Healthcare",
  },
];

const INITIAL_COMMENTS = [
  {
    id: "1",
    postId: "1",
    author: "Sophia Bennett",
    content:
      "This is a fantastic introduction to quantum computing! I've always been curious about how quantum algorithms work. Looking forward to more posts on this topic!",
    date: "2025-12-11",
  },
  {
    id: "2",
    postId: "1",
    author: "Liam Murphy",
    content:
      "I've been following quantum computing for a while now, but it's still very complex. I'd love to see more posts on real-world applications of quantum tech.",
    date: "2025-12-12",
  },
  {
    id: "3",
    postId: "2",
    author: "Emily Adams",
    content:
      "Great post! It's so encouraging to see how renewable energy is becoming a larger part of the global conversation. I'm particularly excited about solar power advancements.",
    date: "2025-12-13",
  },
  {
    id: "4",
    postId: "3",
    author: "Johnathan Gray",
    content:
      "AI in healthcare is a game-changer. I believe it will play a huge role in personalized treatments. The ethical implications are worth discussing as well.",
    date: "2025-12-16",
  },
];

const INITIAL_USER = {
  username: "samuel_kelly",
  bio: "A tech enthusiast exploring the intersections of AI, health, and sustainability. Always looking for ways to make the world a better place through technology.",
  avatar: "https://randomuser.me/api/portraits/men/44.jpg",
};

// Core Store API

const Store = {
  // Get all records for a key
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? null;
    } catch {
      return null;
    }
  },

  // Set records for a key
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Store.set failed:", e);
    }
  },

  // Posts

  getPosts() {
    return this.get("posts") || [];
  },

  getPostById(id) {
    return this.getPosts().find((p) => String(p.id) === String(id)) || null;
  },

  // Comments

  getComments() {
    return this.get("comments") || [];
  },

  getCommentsByPostId(postId) {
    return this.getComments().filter(
      (c) => String(c.postId) === String(postId)
    );
  },

  addComment(postId, author, content) {
    const comments = this.getComments();
    const newComment = {
      id: Math.random().toString(16).slice(2, 6),
      postId: String(postId),
      author,
      content,
      date: new Date().toISOString(),
    };
    comments.push(newComment);
    this.set("comments", comments);
    return newComment;
  },

  // User / Auth

  getUser() {
    return this.get("user") || INITIAL_USER;
  },

  setUser(userData) {
    this.set("user", userData);
  },

  // Registered accounts (for multi-user support)
  getAccounts() {
    return this.get("accounts") || [];
  },

  registerAccount(fullname, email, username, password) {
    const accounts = this.getAccounts();
    if (accounts.find((a) => a.email === email)) {
      return { success: false, error: "Email already registered." };
    }
    if (accounts.find((a) => a.username === username)) {
      return { success: false, error: "Username already taken." };
    }
    accounts.push({ fullname, email, username, password });
    this.set("accounts", accounts);
    return { success: true };
  },

  loginAccount(email, password) {
    // Check registered accounts first
    const accounts = this.getAccounts();
    const found = accounts.find(
      (a) => a.email === email && a.password === password
    );
    if (found) return { success: true, user: found };

    // Fallback: default demo credentials
    if (email === "samuel@example.com" && password === "password123") {
      return { success: true, user: INITIAL_USER };
    }

    return { success: false, error: "Invalid email or password." };
  },

  // Current session
  getSession() {
    return this.get("session") || null;
  },

  setSession(user) {
    this.set("session", user);
    this.set("user", user);
  },

  clearSession() {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
  },

  isLoggedIn() {
    return !!this.getSession();
  },

  // Seed initial data

  seed() {
    if (!this.get("seeded")) {
      this.set("posts", INITIAL_POSTS);
      this.set("comments", INITIAL_COMMENTS);
      this.set("user", INITIAL_USER);
      this.set("seeded", true);
      console.log("Store seeded with initial data.");
    }
  },
};

// Auto-seed on load
Store.seed();