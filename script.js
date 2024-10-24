// Icon Container Slider
const iconSlider = {
  container: document.querySelector(".icon-container"),
  leftArrow: document.getElementById("left-arrow"),
  rightArrow: document.getElementById("right-arrow"),
  scrollAmount: 800,
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

// image section 1

const slidesContainer = document.querySelector("#section-no-1 .slides-01");
const slides = document.querySelectorAll("#section-no-1 .slide");
const prevBtn = document.querySelector("#section-no-1 .prev-btn-01");
const nextBtn = document.querySelector("#section-no-1 .next-btn-01");

let currentIndex = 0;

slides[currentIndex].classList.add("active-01");

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
// image section 2

const slidesContainer2 = document.querySelector("#section-no-2 .slides-02");
const slides2 = document.querySelectorAll("#section-no-2 .slide-02");
const prevBtn2 = document.querySelector("#section-no-2 .prev-btn-02");
const nextBtn2 = document.querySelector("#section-no-2 .next-btn-02");

let currentIndex2 = 0;

slides2[currentIndex2].classList.add("active-02");

nextBtn2.addEventListener("click", () => {
  slides2[currentIndex2].classList.remove("active-02");
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  slides2[currentIndex2].classList.add("active-02");
});

prevBtn2.addEventListener("click", () => {
  slides2[currentIndex2].classList.remove("active-02");
  currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
  slides2[currentIndex2].classList.add("active-02");
});

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
