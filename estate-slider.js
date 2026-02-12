document.addEventListener("DOMContentLoaded", function () {

  const slider = document.getElementById("propertySlider");
  const nextBtn = document.querySelector(".arrow-right");
  const prevBtn = document.querySelector(".arrow-left");

  if (!slider) return;

  let autoSlide = null;
  const intervalTime = 2000;

  /* Get one card full width including gap */
  function getCardWidth() {
    const card = slider.querySelector(".property-card");
    if (!card) return 0;

    const gap = 25; // same as CSS gap
    return card.offsetWidth + gap;
  }

  /* Scroll Next */
  function scrollNext() {
    const scrollAmount = getCardWidth();

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }

  /* Scroll Previous */
  function scrollPrev() {
    const scrollAmount = getCardWidth();

    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  }

  /* Button Click Events */
  if (nextBtn) nextBtn.addEventListener("click", scrollNext);
  if (prevBtn) prevBtn.addEventListener("click", scrollPrev);

  /* Start Auto Slide */
  function startAutoSlide() {
    stopAutoSlide(); // prevent duplicate intervals
    autoSlide = setInterval(scrollNext, intervalTime);
  }

  /* Stop Auto Slide */
  function stopAutoSlide() {
    if (autoSlide) {
      clearInterval(autoSlide);
      autoSlide = null;
    }
  }

  /* Pause on Hover */
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  /* Restart interval on resize (fix responsive glitch) */
  window.addEventListener("resize", () => {
    stopAutoSlide();
    startAutoSlide();
  });

  /* Initialize */
  startAutoSlide();

});
