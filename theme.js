(() => {
    const root = document.documentElement;
    const STORAGE_KEY = "theme";
    const toggleBtn = document.getElementById("themeToggle");

    const prefersDark = () =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const setLabel = (theme) => {
        if (!toggleBtn) return;
        toggleBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    };

    const applyTheme = (theme) => {
        root.dataset.theme = theme;
        localStorage.setItem(STORAGE_KEY, theme);
        setLabel(theme);
    };

    const init = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const theme = stored || (prefersDark() ? "dark" : "light");
        applyTheme(theme);
        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                const next = root.dataset.theme === "dark" ? "light" : "dark";
                applyTheme(next);
            });
        }
    };

    document.addEventListener("DOMContentLoaded", init);
})();
