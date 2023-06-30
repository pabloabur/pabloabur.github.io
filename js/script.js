document.addEventListener('DOMContentLoaded', function() {
  // Get all the slides
  var slides = document.querySelectorAll('.content-slide');

  // Initialize the active slide index
  var activeSlide = 0;

  // Function to show the active slide
  function showSlide() {
    slides.forEach(function(slide, index) {
      if (index === activeSlide) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  // Function to go to the previous slide
  function goToPrevSlide() {
    if (activeSlide > 0) {
      activeSlide--;
      showSlide();
    }
  }

  // Function to go to the next slide
  function goToNextSlide() {
    if (activeSlide < slides.length - 1) {
      activeSlide++;
      showSlide();
    }
  }

  // Attach click event listeners to the buttons
  document.getElementById('prevButton').addEventListener('click', goToPrevSlide);
  document.getElementById('nextButton').addEventListener('click', goToNextSlide);

  // Show the initial slide
  showSlide();
});
