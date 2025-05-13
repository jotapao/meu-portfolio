const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});

AOS.init({ duration: 1200 });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    