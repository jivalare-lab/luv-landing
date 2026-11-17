const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const progress = document.querySelector('.reading-progress');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.documentElement.classList.add('has-js');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

let scrollFrame = 0;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
  scrollFrame = 0;
}
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress);
}, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const activeObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-25% 0px -60% 0px' });
  sections.forEach((section) => activeObserver.observe(section));

  if (!reduceMotion.matches) {
    const city = document.querySelector('.city');
    const sceneObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      city.classList.add('is-visible');
      sceneObserver.disconnect();
    }, { threshold: 0.2 });
    sceneObserver.observe(city);
  }
}
