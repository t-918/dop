const SCROLL_THRESHOLD = 20; // Minimum scroll position to show the back-to-top button

function toggleBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  const scrollDuration = 500; // Duration of the scroll animation in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculation for smooth scrolling

  function step() {
    if (window.scrollY > 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

window.addEventListener("scroll", toggleBackToTopButton);
