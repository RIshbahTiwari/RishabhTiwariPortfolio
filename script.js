// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── Mobile Menu Toggle ──
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.classList.contains('mobile-open');
  if (isOpen) {
    links.classList.remove('mobile-open');
    links.removeAttribute('style');
  } else {
    links.classList.add('mobile-open');
    links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:57px;left:0;right:0;background:rgba(10,10,15,0.97);padding:24px 28px;gap:20px;border-bottom:0.5px solid rgba(255,255,255,0.08);z-index:99;';
  }
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.classList.remove('mobile-open');
    links.removeAttribute('style');
  });
});

// Close mobile menu on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    const links = document.querySelector('.nav-links');
    links.classList.remove('mobile-open');
    links.removeAttribute('style');
  }
});

// ── Active Nav Highlight on Scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});
