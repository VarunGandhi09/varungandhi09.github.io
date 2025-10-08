
// Simple JS for smooth scrolling and mobile toggle
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  const toggle = document.querySelector('.nav-toggle');
  toggle && toggle.addEventListener('click', function(){
    const navLinks = document.querySelector('.nav-links');
    if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
    else navLinks.style.display = 'flex';
  });
});
