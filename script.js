const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const darkModeToggle = document.getElementById('darkModeToggle');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
