const SCROLL_THRESHOLD = 20;

function toggleBackToTopButton() {
  const backToTopButton = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  const scrollDuration = 500;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  function step() {
    if (window.scrollY > 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

window.addEventListener("scroll", toggleBackToTopButton);
