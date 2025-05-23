// Highlight active navigation link based on current page
// Adds 'active' class to the link whose pathname matches the current location

window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[href]');
  const current = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');

  links.forEach(link => {
    const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname
      .replace(/index\.html$/, '').replace(/\/$/, '');
    if (linkPath === current) {
      link.classList.add('active');
    }
  });
});
