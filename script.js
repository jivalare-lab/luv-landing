const animatedScenes = document.querySelectorAll('[data-route], .city-scene, .building-end');

if (animatedScenes.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('has-js');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.2 });
  animatedScenes.forEach((scene) => observer.observe(scene));
}
