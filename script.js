document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: 'smooth'
          });
      });
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the data to a server
          // For now, we'll just show an alert
          alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
          
          // Reset form
          contactForm.reset();
      });
  }
  
  // Add active class to navigation links based on scroll position
  window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
          } else {
              document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
          }
      });
  });
});
