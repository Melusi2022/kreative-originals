const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const darkToggle = document.getElementById('darkModeToggle');

// Toggle mobile nav
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Toggle dark mode
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
