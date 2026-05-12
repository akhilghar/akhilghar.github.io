const themeToggle = document.getElementById("themeToggle");

const setTheme = (mode) => {
    if (mode === "dark") {
        document.body.classList.remove("light-mode");
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
        themeToggle.setAttribute("title", "Switch to light theme");
        themeToggle.setAttribute("aria-pressed", "false");
    } else {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
        themeToggle.setAttribute("title", "Switch to dark theme");
        themeToggle.setAttribute("aria-pressed", "true");
    }
    localStorage.setItem("theme", mode);
};

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.contains("light-mode");
        setTheme(isLight ? "dark" : "light");
    });

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
}
