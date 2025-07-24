// Mobile Nav Toggle
const toggleMenu = () => {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("open");
};

// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");

  // Optional: save mode to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Toggle menu
  const menuBtn = document.querySelector(".menu-toggle");
  if (menuBtn) menuBtn.addEventListener("click", toggleMenu);

  // Toggle dark mode
  const darkBtn = document.querySelector(".dark-mode-toggle");
  if (darkBtn) darkBtn.addEventListener("click", toggleDarkMode);

  // Load saved dark mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
