document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
      parallaxElements.forEach(function(element) {
        const distanceFromTop = element.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight - distanceFromTop;
        
        // Adjust the parallax effect speed and blur effect speed here
        const parallaxValue = scrollPosition * 0.4;
        const blurValue = scrollPosition * 0.01;
  
        element.style.transform = `translateY(${parallaxValue}px)`;
        element.style.filter = `blur(${blurValue}px)`;
      });
    });
  });
  