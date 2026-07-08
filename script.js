/* ============================================================
   JoystickVerse — Main Script
   ============================================================ */

// === Loader ===
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('out');
  }, 1700);
});

// === Reading Progress ===
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  if (!progressBar) return;
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${Math.min((scrolled / total) * 100, 100)}%`;
});

// === Header Scroll Effect ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 50);
});

// === Mobile Menu ===
const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    mobileToggle.classList.toggle('x', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  mainNav.querySelectorAll('a.nav-item').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      mobileToggle.classList.remove('x');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// === Dropdown (mobile tap) ===
document.querySelectorAll('.nav-dropdown').forEach(dd => {
  const trigger = dd.querySelector('.dropdown-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
        trigger.setAttribute('aria-expanded', dd.classList.contains('open'));
      }
    });
  }
});

// === Theme Toggle ===
const themeBtn = document.getElementById('themeBtn');
let dark = true;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    dark = !dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeBtn.innerHTML = dark
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });
}

// === Search Overlay ===
const searchBtn     = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose   = document.getElementById('searchClose');
const searchField   = document.getElementById('searchField');

function openSearch() {
  searchOverlay.classList.add('on');
  setTimeout(() => searchField?.focus(), 80);
  document.body.style.overflow = 'hidden';
}
function closeSearch() {
  searchOverlay.classList.remove('on');
  document.body.style.overflow = '';
}

searchBtn?.addEventListener('click', openSearch);
searchClose?.addEventListener('click', closeSearch);
searchOverlay?.addEventListener('click', e => {
  if (e.target === searchOverlay) closeSearch();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
});

// === Back to Top ===
const backTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('show', window.scrollY > 420);
});
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// === Like Buttons ===
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const liked = btn.classList.toggle('liked');
    const count = btn.querySelector('span');
    if (count) {
      let n = parseInt(count.textContent);
      count.textContent = liked ? n + 1 : n - 1;
    }
  });
});

// === Bookmark Buttons ===
document.querySelectorAll('.bkmk-btn').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('bookmarked'));
});

// === Newsletter Form ===
function handleNewsletter(e) {
  e.preventDefault();
  const form   = e.target;
  const input  = form.querySelector('input');
  const button = form.querySelector('button');
  const orig   = button.innerHTML;

  button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
  button.style.background    = '#22C55E';
  button.style.boxShadow     = '0 4px 18px rgba(34,197,94,.45)';
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML       = orig;
    button.style.background = '';
    button.style.boxShadow  = '';
    button.disabled = false;
    input.value = '';
  }, 3200);
}

// === Scroll Reveal ===
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

revealEls.forEach(el => revealObs.observe(el));

// === Active Nav on Scroll ===
const sections   = document.querySelectorAll('section[id]');
const navItems   = document.querySelectorAll('a.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}, { passive: true });

// === Card tilt micro-effect (desktop only) ===
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 6;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
      card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

console.log('%c🎮 JoystickVerse', 'color:#7C3AED;font-size:1.2rem;font-weight:900;');
console.log('%cReady to level up!', 'color:#00E5FF;font-size:.9rem;');
