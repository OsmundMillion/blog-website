// UI Utility Functions
function showLoading(message = "Loading... Please wait.") {
    let spinner = document.getElementById("loading-spinner");
    if (!spinner) {
        spinner = document.createElement("div");
        spinner.id = "loading-spinner";
        document.body.appendChild(spinner);
    }
    spinner.className = "loading-spinner";
    spinner.textContent = message;
}
function hideLoading() {
    const spinner = document.getElementById("loading-spinner");
    if (spinner) spinner.remove();
}

//# sourceMappingURL=main.05da1fe0.js.map
