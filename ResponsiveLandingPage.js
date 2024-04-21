window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = '#333';
    }
  
    // Highlight the current section in the menu
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        const id = section.getAttribute('id');
        const menuItem = document.querySelector(`#navbar a[href="#${id}"]`);
        menuItem.parentNode.classList.add('active');
      } else {
        const id = section.getAttribute('id');
        const menuItem = document.querySelector(`#navbar a[href="#${id}"]`);
        menuItem.parentNode.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling to section anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });
  