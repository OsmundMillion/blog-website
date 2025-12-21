document.addEventListener("DOMContentLoaded", () => {
  const smallBtn = document.getElementById("font-small");
  const mediumBtn = document.getElementById("font-medium");
  const largeBtn = document.getElementById("font-large");

  if (!smallBtn || !mediumBtn || !largeBtn) return;

  // Apply saved font size on load
  const savedFontSize = localStorage.getItem("fontSize");
  if (savedFontSize) {
    applyFontSize(savedFontSize);
  }

  smallBtn.addEventListener("click", () => {
    applyFontSize("small");
  });

  mediumBtn.addEventListener("click", () => {
    applyFontSize("medium");
  });

  largeBtn.addEventListener("click", () => {
    applyFontSize("large");
  });
});

function applyFontSize(size) {
  document.body.classList.remove("font-small", "font-medium", "font-large");

  switch (size) {
    case "small":
      document.body.classList.add("font-small");
      break;
    case "medium":
      document.body.classList.add("font-medium");
      break;
    case "large":
      document.body.classList.add("font-large");
      break;
  }

  localStorage.setItem("fontSize", size);
}
