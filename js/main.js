// ── NAV SCROLL ────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── BURGER MENU ───────────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const open = navLinks.classList.contains('open');
    burger.setAttribute('aria-expanded', open);
    // animate burger → X
    const spans = burger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  // close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.pers-card, .tl-item, .skill-block, .doc-card, .journal-entry, .intro-block, .hobby-card, .quote-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // stagger siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// ── SMOOTH ANCHOR SCROLL ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── PERSONALITY BAR TOOLTIP ───────────────────────────────────
// (handled via CSS ::after with data-label — no JS needed)

// ── PILL HOVER RIPPLE ─────────────────────────────────────────
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    pill.style.transform = 'scale(.95)';
    setTimeout(() => pill.style.transform = '', 150);
  });
});

// ── PHOTO PLACEHOLDER PULSE ───────────────────────────────────
const frame = document.querySelector('.photo-frame');
if (frame && frame.querySelector('.photo-placeholder')) {
  setInterval(() => {
    frame.style.boxShadow = '0 20px 60px rgba(201,169,154,.4), inset 0 0 0 6px rgba(255,255,255,.5)';
    setTimeout(() => {
      frame.style.boxShadow = '';
    }, 700);
  }, 3500);
}

// ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));
}

// ── PAGE LOADER ───────────────────────────────────────────────
const loader = document.getElementById('pageLoader');
if (loader) {
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 900);
  });
}

// ── DARK MODE TOGGLE ──────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ── BACK TO TOP ───────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── PHONE REQUEST MODAL ───────────────────────────────────────
const phoneModalBtn = document.getElementById('phoneModalBtn');
const phoneModal    = document.getElementById('phoneModal');
const modalClose    = document.getElementById('modalClose');
const modalEmailBtn = document.getElementById('modalEmailBtn');

if (phoneModalBtn && phoneModal) {
  const subject = encodeURIComponent('Telefonszám kérés — Magyar Virág portfólió');
  const body    = encodeURIComponent(
    'Kedves Virág!\n\n' +
    'A portfóliódon keresztül találtam meg az elérhetőségedet.\n' +
    'Szeretnék felvenni Veled a személyes kapcsolatot — kérlek, oszd meg velem telefonszámodat.\n\n' +
    'Köszönöm!\n'
  );
  modalEmailBtn.href = `mailto:magyarvirag005@gmail.com?subject=${subject}&body=${body}`;

  function openModal() {
    phoneModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  function closeModal() {
    phoneModal.classList.remove('open');
    document.body.style.overflow = '';
    phoneModalBtn.focus();
  }

  phoneModalBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);

  phoneModal.addEventListener('click', (e) => {
    if (e.target === phoneModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && phoneModal.classList.contains('open')) closeModal();
  });
}

console.log('Magyar Virág Portfolio — loaded ✨');
