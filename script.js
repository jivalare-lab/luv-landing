const route = document.querySelector('[data-route]');

if (route && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('has-js');
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    route.classList.add('is-visible');
    observer.disconnect();
  }, { threshold: 0.25 });
  observer.observe(route);
}
