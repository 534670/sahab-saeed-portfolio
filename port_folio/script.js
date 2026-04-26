// ─────────────────────────────────────────
//  TYPEWRITER EFFECT
// ─────────────────────────────────────────
const roles = ['Front-End Developer', 'SE Student', 'Intern @ DevelopersHub', 'UI Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function type() {
  const currentWord = roles[roleIndex];

  if (!isDeleting) {
    typewriterEl.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    typewriterEl.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, isDeleting ? 55 : 100);
}

type();


// ─────────────────────────────────────────
//  SCROLL FADE-UP ANIMATION
// ─────────────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


// ─────────────────────────────────────────
//  SKILL BAR ANIMATION
// ─────────────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#skills').forEach(section => skillObserver.observe(section));


// ─────────────────────────────────────────
//  HAMBURGER MENU
// ─────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});


// ─────────────────────────────────────────
//  CONTACT FORM
// ─────────────────────────────────────────
function submitForm() {
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMsg').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  document.getElementById('formSuccess').style.display = 'block';

  ['cName', 'cEmail', 'cSubject', 'cMsg'].forEach(id => {
    document.getElementById(id).value = '';
  });
}
