$(document).ready(function () {
    $('.navbar-nav a').on('click', function () {
      if ($('.navbar-toggler').is(':visible')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });
  
  let currentImageIndex = 0;
const images = document.querySelectorAll('.hero-img');

// Set the first image as active
images[currentImageIndex].classList.add('active');

// Change the image every 5 seconds (5000ms)
setInterval(() => {
  // Remove the active class from the current image
  images[currentImageIndex].classList.remove('active');
  
  // Move to the next image, or loop back to the first one
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Add the active class to the new image
  images[currentImageIndex].classList.add('active');
}, 5000); // Change every 5 seconds
