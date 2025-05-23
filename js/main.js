// Highlight active navigation link based on current page
// Adds 'active' class to the link whose pathname matches the current location

// Capture the script element's src before registering the DOMContentLoaded event
const currentScriptSrc = document.currentScript.src;

window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a[href]');
  const current = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');

  links.forEach(link => {
    const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname
      .replace(/index\.html$/, '').replace(/\/$/, '');
    if (linkPath === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const footer = document.querySelector('footer');
  if (footer) {
    const footerUrl = new URL('../footer.html', currentScriptSrc);
    fetch(footerUrl)
      .then(r => r.text())
      .then(html => { footer.innerHTML = html; })
      .catch(err => console.error('Footer load failed', err));
  }
});
