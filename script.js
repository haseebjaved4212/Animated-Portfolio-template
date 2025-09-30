// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// GSAP setup
gsap.registerPlugin(ScrollTrigger);

// Background particles on canvas
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let dpi = window.devicePixelRatio || 1;

function resizeCanvas() {
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth * dpi;
  canvas.height = innerHeight * dpi;
}

function createParticles(count) {
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.2 + 0.6,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    hue: Math.random() < 0.5 ? 168 : 212,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
    const color = `hsla(${p.hue}, 85%, 65%,`;
    grad.addColorStop(0, `${color}0.45)`);
    grad.addColorStop(1, `${color}0)`);
    ctx.fillStyle = grad;
    ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}

function initParticles() {
  resizeCanvas();
  const base = Math.min(window.innerWidth, window.innerHeight);
  const count = Math.round(base / 10); // responsive density
  createParticles(count);
}

window.addEventListener("resize", initParticles);
initParticles();
animate();

// Section reveal animations
function markRevealTargets() {
  document
    .querySelectorAll(
      ".section .section__title, .project, .skill, .about__text, .contact__form, .contact__info"
    )
    .forEach((el) => el.setAttribute("data-reveal", ""));
}

markRevealTargets();

gsap.utils.toArray("[data-reveal]").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 16, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Fancy hero text intro
gsap.from(".hero__name", {
  y: 18,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  delay: 0.1,
});
gsap.from(".hero__lead", {
  y: 14,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.2,
});
gsap.from(".hero__cta .btn", {
  y: 12,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
  delay: 0.25,
  stagger: 0.08,
});

// Contact form: send via mailto
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:contactimhaseeb@gmail.com?subject=${subject}&body=${body}`;
  });
}

// Toast for Download CV
const toastEl = document.getElementById("toast");
function showToast(message) {
  if (!toastEl) return;
  const content = toastEl.querySelector(".toast__content");
  if (content) content.textContent = message;
  toastEl.hidden = false;
  toastEl.classList.add("toast--show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toastEl.classList.remove("toast--show");
    setTimeout(() => (toastEl.hidden = true), 220);
  }, 1800);
}

document.querySelectorAll(".btn--download").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("This function isn't available yet.");
  });
});
