// UI Utility Functions

function showLoading(message = "Loading... Please wait.") {
  let spinner = document.getElementById("loading-spinner");

  if (!spinner) {
    spinner = document.createElement("div");
    spinner.id = "loading-spinner";
    spinner.style.position = "fixed";
    spinner.style.top = "0";
    spinner.style.left = "0";
    spinner.style.width = "100%";
    spinner.style.padding = "15px";
    spinner.style.backgroundColor = "#f1f5f9";
    spinner.style.color = "#1e3a8a";
    spinner.style.textAlign = "center";
    spinner.style.fontWeight = "bold";
    spinner.style.zIndex = "9999";
    document.body.appendChild(spinner);
  }

  spinner.textContent = message;
}

function hideLoading() {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) spinner.remove();
}
