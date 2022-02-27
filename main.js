function toggleDarkMode() {
    let bodyElement = document.getElementById
    ("main-background");
    let darkModeButtonElement = document.getElementById
    ("dark-mode-btn");

    if (bodyElement.style.background ==="black") {
        bodyElement.style.background = `linear-gradient(
            360deg,
            hsla(238, 100%, 71%, 1) 0%,
            hsla(295, 100%, 84%, 1) 100%
          )`;
        darkModeButtonElement.innerHTML = "Dark Mode"
    }

    else {
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Light Mode"
    }
    
}