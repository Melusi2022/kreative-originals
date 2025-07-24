// Toggle mobile nav
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

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
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

  // Load saved dark mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
// Toggle mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
