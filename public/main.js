// === Mobile Menu ===
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// === Header scroll shadow + mobile auto-hide ===
const header = document.getElementById('site-header');
if (header) {
  let lastScrollY = window.scrollY;
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    header.classList.toggle('scrolled', currentScrollY > 20);

    if (isMobile() && !mobileNav?.classList.contains('open')) {
      // Hide when scrolling down past 60px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        header.classList.add('nav-hidden');
      } else {
        header.classList.remove('nav-hidden');
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// === Scroll Reveal ===
const reveals = document.querySelectorAll('.reveal');
if (reveals.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// === Hero Word-by-Word Highlight ===
const heroWords = document.getElementById('hero-words');
if (heroWords) {
  // Split text nodes into individually wrapped words, preserving HTML entities
  const raw = heroWords.innerHTML;
  heroWords.innerHTML = raw.replace(/(\S+)/g, '<span class="hero-word">$1</span>');

  const words = heroWords.querySelectorAll('.hero-word');
  let animated = false;

  const wordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        words.forEach((w, i) => {
          setTimeout(() => w.classList.add('lit'), i * 60);
        });
        wordObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  wordObserver.observe(heroWords);
}
