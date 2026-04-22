const DEFAULT_THEME = "theme-cloud";
const LIGHT_THEME = "theme-cloud";
const DARK_THEME = "theme-academic";

function normalizeTheme(themeName) {
  if (themeName === "theme-paper" || themeName === "theme-mist" || themeName === "theme-sand") {
    return LIGHT_THEME;
  }

  if (themeName === DARK_THEME) {
    return DARK_THEME;
  }

  return LIGHT_THEME;
}

function setTheme(themeName) {
  const normalizedTheme = normalizeTheme(themeName);
  localStorage.setItem("theme", normalizedTheme);
  document.documentElement.className = normalizedTheme;
}

function keepTheme() {
  const storedTheme = localStorage.getItem("theme");
  setTheme(storedTheme || DEFAULT_THEME);
}

module.exports = { DEFAULT_THEME, LIGHT_THEME, DARK_THEME, setTheme, keepTheme };
