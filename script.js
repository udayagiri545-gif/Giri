// scripts.js

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

}

// Contact form example feedback

document.getElementById('contactForm').addEventListener('submit', function(e) {

  e.preventDefault();

  alert('Thank you for reaching out!');

  this.reset();

});