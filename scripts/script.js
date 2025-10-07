// ============================
//   Navbar Hamburger Toggle
// ============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Accessibility
  const isExpanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});
