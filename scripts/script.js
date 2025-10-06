const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu on mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Highlight active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    navLinks.classList.remove('open'); // close nav on click
  });
});
