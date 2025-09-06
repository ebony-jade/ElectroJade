// Highlight current page in nav
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPath = window.location.pathname.split("/").pop(); 

  navLinks.forEach(link => {
    // If the link href matches the current filename, add .active
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(fader => {
    const rect = fader.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      fader.classList.add('visible');
    }
  });
});
