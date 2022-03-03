function toggleDarkMode() {
    let bodyElement = document.getElementById
    ("main-background");
    let darkModeBtnElement = document.getElementById
    ("dark-mode-btn");

    if (bodyElement.style.background ==="black") {
        bodyElement.style.background = `linear-gradient(
            360deg,
            hsla(238, 100%, 71%, 1) 0%,
            hsla(295, 100%, 84%, 1) 100%
          )`;
        darkModeBtnElement.innerHTML = "Dark Mode";
    }

    else {
        bodyElement.style.background = "black";
        darkModeBtnElement.innerHTML = "Light Mode";
    }
    
}