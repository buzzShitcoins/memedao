document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  
  for (const link of navLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset to account for the navigation bar
        behavior: 'smooth'
      });
    });
  }
});