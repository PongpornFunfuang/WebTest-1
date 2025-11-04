// ปีใน footer
document.getElementById('year').textContent = new Date().getFullYear();

// scroll ลงส่วน about
document.getElementById('viewMore').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// fade-in effect
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('fade-in');
  });
}, { threshold: 0.2 });
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// menu toggle (mobile)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
