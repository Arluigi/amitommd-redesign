document.documentElement.classList.add('js');

// Mobile nav toggle
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Scroll reveal (skipped when reduced motion is preferred)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll('.rv');
if (reduce || !('IntersectionObserver' in window)) {
  els.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// Graphic-content reveal for surgical photos
document.querySelectorAll('.veil-cover button').forEach(btn => {
  btn.addEventListener('click', () => btn.closest('.veil').classList.add('revealed'));
});
