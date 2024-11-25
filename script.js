// icons  slider
const iconSlider = {
  container: document.querySelector(".icon-container"),
  leftArrow: document.getElementById("left-arrow"),
  rightArrow: document.getElementById("right-arrow"),
  scrollAmount: 600,
};

iconSlider.leftArrow.style.visibility = "hidden";

iconSlider.leftArrow.addEventListener("click", () => {
  iconSlider.container.scrollBy({
    left: -iconSlider.scrollAmount,
    behavior: "smooth",
  });
  checkArrows(iconSlider);
});

iconSlider.rightArrow.addEventListener("click", () => {
  iconSlider.container.scrollBy({
    left: iconSlider.scrollAmount,
    behavior: "smooth",
  });
  checkArrows(iconSlider);
});

function checkArrows(slider) {
  const { container, leftArrow, rightArrow } = slider;
  const scrollPosition = container.scrollLeft;
  const containerWidth = container.offsetWidth;
  const scrollWidth = container.scrollWidth;

  if (scrollPosition === 0) {
    leftArrow.style.visibility = "hidden";
    rightArrow.style.visibility = "visible";
  } else if (scrollPosition + containerWidth >= scrollWidth) {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
}

//  event listener for touch
iconSlider.container.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const scrollPosition = iconSlider.container.scrollLeft;
  const containerWidth = iconSlider.container.offsetWidth;
  const scrollWidth = iconSlider.container.scrollWidth;

  if (touch.clientX < containerWidth / 2) {
    // Scroll left
    iconSlider.container.scrollBy({
      left: -iconSlider.scrollAmount,
      behavior: "smooth",
    });
  } else {
    // scroll right
    iconSlider.container.scrollBy({
      left: iconSlider.scrollAmount,
      behavior: "smooth",
    });
  }

  checkArrows(iconSlider);
});

// image section 1
const slidesContainer = document.querySelector("#section-no-1 .slides-01");
const slides = document.querySelectorAll("#section-no-1 .slide");
const prevBtn = document.querySelector("#section-no-1 .prev-btn-01");
const nextBtn = document.querySelector("#section-no-1 .next-btn-01");

let currentIndex = 0;
slides[currentIndex].classList.add("active-01");

// function to check if device
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// add event listener for click events on arrows
nextBtn.addEventListener("click", () => {
  if (slides[currentIndex]) {
    slides[currentIndex].classList.remove("active-01");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active-01");
  }
});

prevBtn.addEventListener("click", () => {
  if (slides[currentIndex]) {
    slides[currentIndex].classList.remove("active-01");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active-01");
  }
});

// add swipe functionality
let touchStartX, touchEndX;
slidesContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

slidesContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  const swipeDistance = touchEndX - touchStartX;
  const swipeThreshold = 50;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      // swipe right
      if (slides[currentIndex]) {
        slides[currentIndex].classList.remove("active-01");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add("active-01");
      }
    } else {
      // swipe left
      if (slides[currentIndex]) {
        slides[currentIndex].classList.remove("active-01");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active-01");
      }
    }
  }
});

// hide navigation arrows on mobile devices
if (isMobileDevice()) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

// image section 2
const slidesContainer2 = document.querySelector("#section-no-2 .slides-02");
const slides2 = document.querySelectorAll("#section-no-2 .slide-02");
const prevBtn2 = document.querySelector("#section-no-2 .prev-btn-02");
const nextBtn2 = document.querySelector("#section-no-2 .next-btn-02");

let currentIndex2 = 0;
slides2[currentIndex2].classList.add("active-02");

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

nextBtn2.addEventListener("click", () => {
  if (slides2[currentIndex2]) {
    slides2[currentIndex2].classList.remove("active-02");
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    slides2[currentIndex2].classList.add("active-02");
  }
});

prevBtn2.addEventListener("click", () => {
  if (slides2[currentIndex2]) {
    slides2[currentIndex2].classList.remove("active-02");
    currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
    slides2[currentIndex2].classList.add("active-02");
  }
});

let touchStartX2, touchEndX2;
slidesContainer2.addEventListener("touchstart", (e) => {
  touchStartX2 = e.touches[0].clientX;
});

slidesContainer2.addEventListener("touchend", (e) => {
  touchEndX2 = e.changedTouches[0].clientX;
  const swipeDistance2 = touchEndX2 - touchStartX2;
  const swipeThreshold2 = 50;

  if (Math.abs(swipeDistance2) > swipeThreshold2) {
    if (swipeDistance2 > 0) {
      if (slides2[currentIndex2]) {
        slides2[currentIndex2].classList.remove("active-02");
        currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
        slides2[currentIndex2].classList.add("active-02");
      }
    } else {
      if (slides2[currentIndex2]) {
        slides2[currentIndex2].classList.remove("active-02");
        currentIndex2 = (currentIndex2 + 1) % slides2.length;
        slides2[currentIndex2].classList.add("active-02");
      }
    }
  }
});

if (isMobileDevice()) {
  prevBtn2.style.display = "none";
  nextBtn2.style.display = "none";
}
// image section 3
const slidesContainer3 = document.querySelector("#section-no-3 .slides-03");
const slides3 = document.querySelectorAll("#section-no-3 .slide-03");
const prevBtn3 = document.querySelector("#section-no-3 .prev-btn-03");
const nextBtn3 = document.querySelector("#section-no-3 .next-btn-03");

let currentIndex3 = 0;
slides3[currentIndex3].classList.add("active-03");

nextBtn3.addEventListener("click", () => {
  slides3[currentIndex3].classList.remove("active-03");
  currentIndex3 = (currentIndex3 + 1) % slides3.length;
  slides3[currentIndex3].classList.add("active-03");
});

prevBtn3.addEventListener("click", () => {
  slides3[currentIndex3].classList.remove("active-03");
  currentIndex3 = (currentIndex3 - 1 + slides3.length) % slides3.length;
  slides3[currentIndex3].classList.add("active-03");
});

let touchStartX3, touchEndX3;
slidesContainer3.addEventListener("touchstart", (e) => {
  touchStartX3 = e.touches[0].clientX;
});

slidesContainer3.addEventListener("touchend", (e) => {
  touchEndX3 = e.changedTouches[0].clientX;
  const swipeDistance3 = touchEndX3 - touchStartX3;
  const swipeThreshold3 = 50;

  if (Math.abs(swipeDistance3) > swipeThreshold3) {
    if (swipeDistance3 > 0) {
      slides3[currentIndex3].classList.remove("active-03");
      currentIndex3 = (currentIndex3 - 1 + slides3.length) % slides3.length;
      slides3[currentIndex3].classList.add("active-03");
    } else {
      slides3[currentIndex3].classList.remove("active-03");
      currentIndex3 = (currentIndex3 + 1) % slides3.length;
      slides3[currentIndex3].classList.add("active-03");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn3.style.display = "none";
  nextBtn3.style.display = "none";
}

// image section 4
const slidesContainer4 = document.querySelector("#section-no-4 .slides-04");
const slides4 = document.querySelectorAll("#section-no-4 .slide-04");
const prevBtn4 = document.querySelector("#section-no-4 .prev-btn-04");
const nextBtn4 = document.querySelector("#section-no-4 .next-btn-04");

let currentIndex4 = 0;
slides4[currentIndex4].classList.add("active-04");

nextBtn4.addEventListener("click", () => {
  slides4[currentIndex4].classList.remove("active-04");
  currentIndex4 = (currentIndex4 + 1) % slides4.length;
  slides4[currentIndex4].classList.add("active-04");
});

prevBtn4.addEventListener("click", () => {
  slides4[currentIndex4].classList.remove("active-04");
  currentIndex4 = (currentIndex4 - 1 + slides4.length) % slides4.length;
  slides4[currentIndex4].classList.add("active-04");
});

let touchStartX4, touchEndX4;
slidesContainer4.addEventListener("touchstart", (e) => {
  touchStartX4 = e.touches[0].clientX;
});

slidesContainer4.addEventListener("touchend", (e) => {
  touchEndX4 = e.changedTouches[0].clientX;
  const swipeDistance4 = touchEndX4 - touchStartX4;
  const swipeThreshold4 = 50;

  if (Math.abs(swipeDistance4) > swipeThreshold4) {
    if (swipeDistance4 > 0) {
      slides4[currentIndex4].classList.remove("active-04");
      currentIndex4 = (currentIndex4 - 1 + slides4.length) % slides4.length;
      slides4[currentIndex4].classList.add("active-04");
    } else {
      slides4[currentIndex4].classList.remove("active-04");
      currentIndex4 = (currentIndex4 + 1) % slides4.length;
      slides4[currentIndex4].classList.add("active-04");
    }
  }
});

if (isMobileDevice()) {
  prevBtn4.style.display = "none";
  nextBtn4.style.display = "none";
}

// image section 5
const slidesContainer5 = document.querySelector("#section-no-5 .slides-05");
const slides5 = document.querySelectorAll("#section-no-5 .slide-05");
const prevBtn5 = document.querySelector("#section-no-5 .prev-btn-05");
const nextBtn5 = document.querySelector("#section-no-5 .next-btn-05");

let currentIndex5 = 0;
slides5[currentIndex5].classList.add("active-05");

nextBtn5.addEventListener("click", () => {
  if (slides5[currentIndex5]) {
    slides5[currentIndex5].classList.remove("active-05");
    currentIndex5 = (currentIndex5 + 1) % slides5.length;
    slides5[currentIndex5].classList.add("active-05");
  }
});

prevBtn5.addEventListener("click", () => {
  if (slides5[currentIndex5]) {
    slides5[currentIndex5].classList.remove("active-05");
    currentIndex5 = (currentIndex5 - 1 + slides5.length) % slides5.length;
    slides5[currentIndex5].classList.add("active-05");
  }
});

let touchStartX5, touchEndX5;
slidesContainer5.addEventListener("touchstart", (e) => {
  touchStartX5 = e.touches[0].clientX;
});

slidesContainer5.addEventListener("touchend", (e) => {
  touchEndX5 = e.changedTouches[0].clientX;
  const swipeDistance5 = touchEndX5 - touchStartX5;
  const swipeThreshold5 = 50;

  if (Math.abs(swipeDistance5) > swipeThreshold5) {
    if (swipeDistance5 > 0) {
      slides5[currentIndex5].classList.remove("active-05");
      currentIndex5 = (currentIndex5 - 1 + slides5.length) % slides5.length;
      slides5[currentIndex5].classList.add("active-05");
    } else {
      slides5[currentIndex5].classList.remove("active-05");
      currentIndex5 = (currentIndex5 + 1) % slides5.length;
      slides5[currentIndex5].classList.add("active-05");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn5.style.display = "none";
  nextBtn5.style.display = "none";
}

// image section 6
const slidesContainer6 = document.querySelector("#section-no-6 .slides-06");
const slides6 = document.querySelectorAll("#section-no-6 .slide-06");
const prevBtn6 = document.querySelector("#section-no-6 .prev-btn-06");
const nextBtn6 = document.querySelector("#section-no-6 .next-btn-06");

let currentIndex6 = 0;
slides6[currentIndex6].classList.add("active-06");

nextBtn6.addEventListener("click", () => {
  if (slides6[currentIndex6]) {
    slides6[currentIndex6].classList.remove("active-06");
    currentIndex6 = (currentIndex6 + 1) % slides6.length;
    slides6[currentIndex6].classList.add("active-06");
  }
});

prevBtn6.addEventListener("click", () => {
  if (slides6[currentIndex6]) {
    slides6[currentIndex6].classList.remove("active-06");
    currentIndex6 = (currentIndex6 - 1 + slides6.length) % slides6.length;
    slides6[currentIndex6].classList.add("active-06");
  }
});

let touchStartX6, touchEndX6;
slidesContainer6.addEventListener("touchstart", (e) => {
  touchStartX6 = e.touches[0].clientX;
});

slidesContainer6.addEventListener("touchend", (e) => {
  touchEndX6 = e.changedTouches[0].clientX;
  const swipeDistance6 = touchEndX6 - touchStartX6;
  const swipeThreshold6 = 50;

  if (Math.abs(swipeDistance6) > swipeThreshold6) {
    if (swipeDistance6 > 0) {
      slides6[currentIndex6].classList.remove("active-06");
      currentIndex6 = (currentIndex6 - 1 + slides6.length) % slides6.length;
      slides6[currentIndex6].classList.add("active-06");
    } else {
      slides6[currentIndex6].classList.remove("active-06");
      currentIndex6 = (currentIndex6 + 1) % slides6.length;
      slides6[currentIndex6].classList.add("active-06");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn6.style.display = "none";
  nextBtn6.style.display = "none";
}

// image section 7
const slidesContainer7 = document.querySelector("#section-no-7 .slides-07");
const slides7 = document.querySelectorAll("#section-no-7 .slide-07");
const prevBtn7 = document.querySelector("#section-no-7 .prev-btn-07");
const nextBtn7 = document.querySelector("#section-no-7 .next-btn-07");

let currentIndex7 = 0;
slides7[currentIndex7].classList.add("active-07");

nextBtn7.addEventListener("click", () => {
  if (slides7[currentIndex7]) {
    slides7[currentIndex7].classList.remove("active-07");
    currentIndex7 = (currentIndex7 + 1) % slides7.length;
    slides7[currentIndex7].classList.add("active-07");
  }
});

prevBtn7.addEventListener("click", () => {
  if (slides7[currentIndex7]) {
    slides7[currentIndex7].classList.remove("active-07");
    currentIndex7 = (currentIndex7 - 1 + slides7.length) % slides7.length;
    slides7[currentIndex7].classList.add("active-07");
  }
});

let touchStartX7, touchEndX7;
slidesContainer7.addEventListener("touchstart", (e) => {
  touchStartX7 = e.touches[0].clientX;
});

slidesContainer7.addEventListener("touchend", (e) => {
  touchEndX7 = e.changedTouches[0].clientX;
  const swipeDistance7 = touchEndX7 - touchStartX7;
  const swipeThreshold7 = 50;

  if (Math.abs(swipeDistance7) > swipeThreshold7) {
    if (swipeDistance7 > 0) {
      slides7[currentIndex7].classList.remove("active-07");
      currentIndex7 = (currentIndex7 - 1 + slides7.length) % slides7.length;
      slides7[currentIndex7].classList.add("active-07");
    } else {
      slides7[currentIndex7].classList.remove("active-07");
      currentIndex7 = (currentIndex7 + 1) % slides7.length;
      slides7[currentIndex7].classList.add("active-07");
    }
  }
});

let autoplayInterval7;
const autoplayDuration7 = 3000;

function startAutoplay7() {
  autoplayInterval7 = setInterval(() => {
    nextBtn7.click();
  }, autoplayDuration7);
}

function stopAutoplay7() {
  clearInterval(autoplayInterval7);
}

slidesContainer7.addEventListener("mouseenter", stopAutoplay7);
slidesContainer7.addEventListener("mouseleave", startAutoplay7);

startAutoplay7();

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn7.style.display = "none";
  nextBtn7.style.display = "none";
}

// image section 8
const slidesContainer8 = document.querySelector("#section-no-8 .slides-08");
const slides8 = document.querySelectorAll("#section-no-8 .slide-08");
const prevBtn8 = document.querySelector("#section-no-8 .prev-btn-08");
const nextBtn8 = document.querySelector("#section-no-8 .next-btn-08");

let currentIndex8 = 0;
slides8[currentIndex8].classList.add("active-08");

nextBtn8.addEventListener("click", () => {
  if (slides8[currentIndex8]) {
    slides8[currentIndex8].classList.remove("active-08");
    currentIndex8 = (currentIndex8 + 1) % slides8.length;
    slides8[currentIndex8].classList.add("active-08");
  }
});

prevBtn8.addEventListener("click", () => {
  if (slides8[currentIndex8]) {
    slides8[currentIndex8].classList.remove("active-08");
    currentIndex8 = (currentIndex8 - 1 + slides8.length) % slides8.length;
    slides8[currentIndex8].classList.add("active-08");
  }
});

let touchStartX8, touchEndX8;
slidesContainer8.addEventListener("touchstart", (e) => {
  touchStartX8 = e.touches[0].clientX;
});

slidesContainer8.addEventListener("touchend", (e) => {
  touchEndX8 = e.changedTouches[0].clientX;
  const swipeDistance8 = touchEndX8 - touchStartX8;
  const swipeThreshold8 = 50;

  if (Math.abs(swipeDistance8) > swipeThreshold8) {
    if (swipeDistance8 > 0) {
      slides8[currentIndex8].classList.remove("active-08");
      currentIndex8 = (currentIndex8 - 1 + slides8.length) % slides8.length;
      slides8[currentIndex8].classList.add("active-08");
    } else {
      slides8[currentIndex8].classList.remove("active-08");
      currentIndex8 = (currentIndex8 + 1) % slides8.length;
      slides8[currentIndex8].classList.add("active-08");
    }
  }
});

let autoplayInterval8;
const autoplayDuration8 = 3000;

function startAutoplay8() {
  autoplayInterval8 = setInterval(() => {
    nextBtn8.click();
  }, autoplayDuration8);
}

function stopAutoplay8() {
  clearInterval(autoplayInterval8);
}

slidesContainer8.addEventListener("mouseenter", stopAutoplay8);
slidesContainer8.addEventListener("mouseleave", startAutoplay8);

startAutoplay8();

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn8.style.display = "none";
  nextBtn8.style.display = "none";
}

// image section 9
const slidesContainer9 = document.querySelector("#section-no-9 .slides-09");
const slides9 = document.querySelectorAll("#section-no-9 .slide-09");
const prevBtn9 = document.querySelector("#section-no-9 .prev-btn-09");
const nextBtn9 = document.querySelector("#section-no-9 .next-btn-09");

let currentIndex9 = 0;
slides9[currentIndex9].classList.add("active-09");

nextBtn9.addEventListener("click", () => {
  if (slides9[currentIndex9]) {
    slides9[currentIndex9].classList.remove("active-09");
    currentIndex9 = (currentIndex9 + 1) % slides9.length;
    slides9[currentIndex9].classList.add("active-09");
  }
});

prevBtn9.addEventListener("click", () => {
  if (slides9[currentIndex9]) {
    slides9[currentIndex9].classList.remove("active-09");
    currentIndex9 = (currentIndex9 - 1 + slides9.length) % slides9.length;
    slides9[currentIndex9].classList.add("active-09");
  }
});

let touchStartX9, touchEndX9;
slidesContainer9.addEventListener("touchstart", (e) => {
  touchStartX9 = e.touches[0].clientX;
});

slidesContainer9.addEventListener("touchend", (e) => {
  touchEndX9 = e.changedTouches[0].clientX;
  const swipeDistance9 = touchEndX9 - touchStartX9;
  const swipeThreshold9 = 50;

  if (Math.abs(swipeDistance9) > swipeThreshold9) {
    if (swipeDistance9 > 0) {
      slides9[currentIndex9].classList.remove("active-09");
      currentIndex9 = (currentIndex9 - 1 + slides9.length) % slides9.length;
      slides9[currentIndex9].classList.add("active-09");
    } else {
      slides9[currentIndex9].classList.remove("active-09");
      currentIndex9 = (currentIndex9 + 1) % slides9.length;
      slides9[currentIndex9].classList.add("active-09");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn9.style.display = "none";
  nextBtn9.style.display = "none";
}

// image section 10
const slidesContainer10 = document.querySelector("#section-no-10 .slides-10");
const slides10 = document.querySelectorAll("#section-no-10 .slide-10");
const prevBtn10 = document.querySelector("#section-no-10 .prev-btn-10");
const nextBtn10 = document.querySelector("#section-no-10 .next-btn-10");

let currentIndex10 = 0;
slides10[currentIndex10].classList.add("active-10");

nextBtn10.addEventListener("click", () => {
  if (slides10[currentIndex10]) {
    slides10[currentIndex10].classList.remove("active-10");
    currentIndex10 = (currentIndex10 + 1) % slides10.length;
    slides10[currentIndex10].classList.add("active-10");
  }
});

prevBtn10.addEventListener("click", () => {
  if (slides10[currentIndex10]) {
    slides10[currentIndex10].classList.remove("active-10");
    currentIndex10 = (currentIndex10 - 1 + slides10.length) % slides10.length;
    slides10[currentIndex10].classList.add("active-10");
  }
});

let touchStartX10, touchEndX10;
slidesContainer10.addEventListener("touchstart", (e) => {
  touchStartX10 = e.touches[0].clientX;
});

slidesContainer10.addEventListener("touchend", (e) => {
  touchEndX10 = e.changedTouches[0].clientX;
  const swipeDistance10 = touchEndX10 - touchStartX10;
  const swipeThreshold10 = 50;

  if (Math.abs(swipeDistance10) > swipeThreshold10) {
    if (swipeDistance10 > 0) {
      slides10[currentIndex10].classList.remove("active-10");
      currentIndex10 = (currentIndex10 - 1 + slides10.length) % slides10.length;
      slides10[currentIndex10].classList.add("active-10");
    } else {
      slides10[currentIndex10].classList.remove("active-10");
      currentIndex10 = (currentIndex10 + 1) % slides10.length;
      slides10[currentIndex10].classList.add("active-10");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn10.style.display = "none";
  nextBtn10.style.display = "none";
}

// image section 11
const slidesContainer11 = document.querySelector("#section-no-11 .slides-11");
const slides11 = document.querySelectorAll("#section-no-11 .slide-11");
const prevBtn11 = document.querySelector("#section-no-11 .prev-btn-11");
const nextBtn11 = document.querySelector("#section-no-11 .next-btn-11");

let currentIndex11 = 0;
slides11[currentIndex11].classList.add("active-11");

nextBtn11.addEventListener("click", () => {
  if (slides11[currentIndex11]) {
    slides11[currentIndex11].classList.remove("active-11");
    currentIndex11 = (currentIndex11 + 1) % slides11.length;
    slides11[currentIndex11].classList.add("active-11");
  }
});

prevBtn11.addEventListener("click", () => {
  if (slides11[currentIndex11]) {
    slides11[currentIndex11].classList.remove("active-11");
    currentIndex11 = (currentIndex11 - 1 + slides11.length) % slides11.length;
    slides11[currentIndex11].classList.add("active-11");
  }
});

let touchStartX11, touchEndX11;
slidesContainer11.addEventListener("touchstart", (e) => {
  touchStartX11 = e.touches[0].clientX;
});

slidesContainer11.addEventListener("touchend", (e) => {
  touchEndX11 = e.changedTouches[0].clientX;
  const swipeDistance11 = touchEndX11 - touchStartX11;
  const swipeThreshold11 = 50;

  if (Math.abs(swipeDistance11) > swipeThreshold11) {
    if (swipeDistance11 > 0) {
      slides11[currentIndex11].classList.remove("active-11");
      currentIndex11 = (currentIndex11 - 1 + slides11.length) % slides11.length;
      slides11[currentIndex11].classList.add("active-11");
    } else {
      slides11[currentIndex11].classList.remove("active-11");
      currentIndex11 = (currentIndex11 + 1) % slides11.length;
      slides11[currentIndex11].classList.add("active-11");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn11.style.display = "none";
  nextBtn11.style.display = "none";
}

// image section 12
const slidesContainer12 = document.querySelector("#section-no-12 .slides-12");
const slides12 = document.querySelectorAll("#section-no-12 .slide-12");
const prevBtn12 = document.querySelector("#section-no-12 .prev-btn-12");
const nextBtn12 = document.querySelector("#section-no-12 .next-btn-12");

let currentIndex12 = 0;
slides12[currentIndex12].classList.add("active-12");

nextBtn12.addEventListener("click", () => {
  if (slides12[currentIndex12]) {
    slides12[currentIndex12].classList.remove("active-12");
    currentIndex12 = (currentIndex12 + 1) % slides12.length;
    slides12[currentIndex12].classList.add("active-12");
  }
});

prevBtn12.addEventListener("click", () => {
  if (slides12[currentIndex12]) {
    slides12[currentIndex12].classList.remove("active-12");
    currentIndex12 = (currentIndex12 - 1 + slides12.length) % slides12.length;
    slides12[currentIndex12].classList.add("active-12");
  }
});

let touchStartX12, touchEndX12;
slidesContainer12.addEventListener("touchstart", (e) => {
  touchStartX12 = e.touches[0].clientX;
});

slidesContainer12.addEventListener("touchend", (e) => {
  touchEndX12 = e.changedTouches[0].clientX;
  const swipeDistance12 = touchEndX12 - touchStartX12;
  const swipeThreshold12 = 50;

  if (Math.abs(swipeDistance12) > swipeThreshold12) {
    if (swipeDistance12 > 0) {
      slides12[currentIndex12].classList.remove("active-12");
      currentIndex12 = (currentIndex12 - 1 + slides12.length) % slides12.length;
      slides12[currentIndex12].classList.add("active-12");
    } else {
      slides12[currentIndex12].classList.remove("active-12");
      currentIndex12 = (currentIndex12 + 1) % slides12.length;
      slides12[currentIndex12].classList.add("active-12");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn12.style.display = "none";
  nextBtn12.style.display = "none";
}

// image section 13
const slidesContainer13 = document.querySelector("#section-no-13 .slides-13");
const slides13 = document.querySelectorAll("#section-no-13 .slide-13");
const prevBtn13 = document.querySelector("#section-no-13 .prev-btn-13");
const nextBtn13 = document.querySelector("#section-no-13 .next-btn-13");

let currentIndex13 = 0;
slides13[currentIndex13].classList.add("active-13");

nextBtn13.addEventListener("click", () => {
  if (slides13[currentIndex13]) {
    slides13[currentIndex13].classList.remove("active-13");
    currentIndex13 = (currentIndex13 + 1) % slides13.length;
    slides13[currentIndex13].classList.add("active-13");
  }
});

prevBtn13.addEventListener("click", () => {
  if (slides13[currentIndex13]) {
    slides13[currentIndex13].classList.remove("active-13");
    currentIndex13 = (currentIndex13 - 1 + slides13.length) % slides13.length;
    slides13[currentIndex13].classList.add("active-13");
  }
});

let touchStartX13, touchEndX13;
slidesContainer13.addEventListener("touchstart", (e) => {
  touchStartX13 = e.touches[0].clientX;
});

slidesContainer13.addEventListener("touchend", (e) => {
  touchEndX13 = e.changedTouches[0].clientX;
  const swipeDistance13 = touchEndX13 - touchStartX13;
  const swipeThreshold13 = 50;

  if (Math.abs(swipeDistance13) > swipeThreshold13) {
    if (swipeDistance13 > 0) {
      slides13[currentIndex13].classList.remove("active-13");
      currentIndex13 = (currentIndex13 - 1 + slides13.length) % slides13.length;
      slides13[currentIndex13].classList.add("active-13");
    } else {
      slides13[currentIndex13].classList.remove("active-13");
      currentIndex13 = (currentIndex13 + 1) % slides13.length;
      slides13[currentIndex13].classList.add("active-13");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn13.style.display = "none";
  nextBtn13.style.display = "none";
}

// image section 14
const slidesContainer14 = document.querySelector("#section-no-14 .slides-14");
const slides14 = document.querySelectorAll("#section-no-14 .slide-14");
const prevBtn14 = document.querySelector("#section-no-14 .prev-btn-14");
const nextBtn14 = document.querySelector("#section-no-14 .next-btn-14");

let currentIndex14 = 0;
slides14[currentIndex14].classList.add("active-14");

nextBtn14.addEventListener("click", () => {
  slides14[currentIndex14].classList.remove("active-14");
  currentIndex14 = (currentIndex14 + 1) % slides14.length;
  slides14[currentIndex14].classList.add("active-14");
});

prevBtn14.addEventListener("click", () => {
  slides14[currentIndex14].classList.remove("active-14");
  currentIndex14 = (currentIndex14 - 1 + slides14.length) % slides14.length;
  slides14[currentIndex14].classList.add("active-14");
});

let touchStartX14, touchEndX14;
slidesContainer14.addEventListener("touchstart", (e) => {
  touchStartX14 = e.touches[0].clientX;
});

slidesContainer14.addEventListener("touchend", (e) => {
  touchEndX14 = e.changedTouches[0].clientX;
  const swipeDistance14 = touchEndX14 - touchStartX14;
  const swipeThreshold14 = 50;

  if (Math.abs(swipeDistance14) > swipeThreshold14) {
    if (swipeDistance14 > 0) {
      slides14[currentIndex14].classList.remove("active-14");
      currentIndex14 = (currentIndex14 - 1 + slides14.length) % slides14.length;
      slides14[currentIndex14].classList.add("active-14");
    } else {
      slides14[currentIndex14].classList.remove("active-14");
      currentIndex14 = (currentIndex14 + 1) % slides14.length;
      slides14[currentIndex14].classList.add("active-14");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn14.style.display = "none";
  nextBtn14.style.display = "none";
}

// image section 15
const slidesContainer15 = document.querySelector("#section-no-15 .slides-15");
const slides15 = document.querySelectorAll("#section-no-15 .slide-15");
const prevBtn15 = document.querySelector("#section-no-15 .prev-btn-15");
const nextBtn15 = document.querySelector("#section-no-15 .next-btn-15");

let currentIndex15 = 0;
slides15[currentIndex15].classList.add("active-15");

nextBtn15.addEventListener("click", () => {
  slides15[currentIndex15].classList.remove("active-15");
  currentIndex15 = (currentIndex15 + 1) % slides15.length;
  slides15[currentIndex15].classList.add("active-15");
});

prevBtn15.addEventListener("click", () => {
  slides15[currentIndex15].classList.remove("active-15");
  currentIndex15 = (currentIndex15 - 1 + slides15.length) % slides15.length;
  slides15[currentIndex15].classList.add("active-15");
});

let touchStartX15, touchEndX15;
slidesContainer15.addEventListener("touchstart", (e) => {
  touchStartX15 = e.touches[0].clientX;
});

slidesContainer15.addEventListener("touchend", (e) => {
  touchEndX15 = e.changedTouches[0].clientX;
  const swipeDistance15 = touchEndX15 - touchStartX15;
  const swipeThreshold15 = 50;

  if (Math.abs(swipeDistance15) > swipeThreshold15) {
    if (swipeDistance15 > 0) {
      slides15[currentIndex15].classList.remove("active-15");
      currentIndex15 = (currentIndex15 - 1 + slides15.length) % slides15.length;
      slides15[currentIndex15].classList.add("active-15");
    } else {
      slides15[currentIndex15].classList.remove("active-15");
      currentIndex15 = (currentIndex15 + 1) % slides15.length;
      slides15[currentIndex15].classList.add("active-15");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn15.style.display = "none";
  nextBtn15.style.display = "none";
}

// image section 16
const slidesContainer16 = document.querySelector("#section-no-16 .slides-16");
const slides16 = document.querySelectorAll("#section-no-16 .slide-16");
const prevBtn16 = document.querySelector("#section-no-16 .prev-btn-16");
const nextBtn16 = document.querySelector("#section-no-16 .next-btn-16");

let currentIndex16 = 0;
slides16[currentIndex16].classList.add("active-16");

nextBtn16.addEventListener("click", () => {
  slides16[currentIndex16].classList.remove("active-16");
  currentIndex16 = (currentIndex16 + 1) % slides16.length;
  slides16[currentIndex16].classList.add("active-16");
});

prevBtn16.addEventListener("click", () => {
  slides16[currentIndex16].classList.remove("active-16");
  currentIndex16 = (currentIndex16 - 1 + slides16.length) % slides16.length;
  slides16[currentIndex16].classList.add("active-16");
});

let touchStartX16, touchEndX16;
slidesContainer16.addEventListener("touchstart", (e) => {
  touchStartX16 = e.touches[0].clientX;
});

slidesContainer16.addEventListener("touchend", (e) => {
  touchEndX16 = e.changedTouches[0].clientX;
  const swipeDistance16 = touchEndX16 - touchStartX16;
  const swipeThreshold16 = 50;

  if (Math.abs(swipeDistance16) > swipeThreshold16) {
    if (swipeDistance16 > 0) {
      slides16[currentIndex16].classList.remove("active-16");
      currentIndex16 = (currentIndex16 - 1 + slides16.length) % slides16.length;
      slides16[currentIndex16].classList.add("active-16");
    } else {
      slides16[currentIndex16].classList.remove("active-16");
      currentIndex16 = (currentIndex16 + 1) % slides16.length;
      slides16[currentIndex16].classList.add("active-16");
    }
  }
});

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  prevBtn16.style.display = "none";
  nextBtn16.style.display = "none";
}
//
//

const navigations = [
  ".navigation-01",
  ".navigation-02",
  ".navigation-03",
  ".navigation-04",
  ".navigation-05",
  ".navigation-06",
  ".navigation-07",
  ".navigation-08",
  ".navigation-09",
  ".navigation-10",
];

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    navigations.forEach((navigation) => {
      document.querySelector(navigation).style.display = "none";
    });
  } else {
    navigations.forEach((navigation) => {
      document.querySelector(navigation).style.display = "";
    });
  }
}

window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();
