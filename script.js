// Qorra AI Website Script

/*
  This script adds a gentle scroll effect to the navigation bar and handles
  contact form submissions. The navigation bar becomes more opaque as the
  visitor scrolls down the page. The contact form submission is intercepted to
  prevent page reloads and can be hooked into a backend service.
*/

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const form = document.getElementById('contactForm');

  // Adjust nav background on scroll for better readability
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Handle contact form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    // TODO: Integrate with backend or email service
    // For now, simply show a confirmation alert
    alert(`Thank you, ${values.name}! We'll be in touch soon.`);
    form.reset();
  });
});