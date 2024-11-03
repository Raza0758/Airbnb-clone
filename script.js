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
// image section 6

const slidesContainer6 = document.querySelector("#section-no-6 .slides-06");
const slides6 = document.querySelectorAll("#section-no-6 .slide-06");
const prevBtn6 = document.querySelector("#section-no-6 .prev-btn-06");
const nextBtn6 = document.querySelector("#section-no-6 .next-btn-06");

let currentIndex6 = 0;

slides6[currentIndex6].classList.add("active-06");

nextBtn6.addEventListener("click", () => {
  slides6[currentIndex6].classList.remove("active-06");
  currentIndex6 = (currentIndex6 + 1) % slides6.length;
  slides6[currentIndex6].classList.add("active-06");
});

prevBtn6.addEventListener("click", () => {
  slides6[currentIndex6].classList.remove("active-06");
  currentIndex6 = (currentIndex6 - 1 + slides6.length) % slides6.length;
  slides6[currentIndex6].classList.add("active-06");
});

// image section 7

const slidesContainer7 = document.querySelector("#section-no-7 .slides-07");
const slides7 = document.querySelectorAll("#section-no-7 .slide-07");
const prevBtn7 = document.querySelector("#section-no-7 .prev-btn-07");
const nextBtn7 = document.querySelector("#section-no-7 .next-btn-07");

let currentIndex7 = 0;

slides7[currentIndex7].classList.add("active-07");

nextBtn7.addEventListener("click", () => {
  slides7[currentIndex7].classList.remove("active-07");
  currentIndex7 = (currentIndex7 + 1) % slides7.length;
  slides7[currentIndex7].classList.add("active-07");
});

prevBtn7.addEventListener("click", () => {
  slides7[currentIndex7].classList.remove("active-07");
  currentIndex7 = (currentIndex7 - 1 + slides7.length) % slides7.length;
  slides7[currentIndex7].classList.add("active-07");
});

// image section 8

const slidesContainer8 = document.querySelector("#section-no-8 .slides-08");
const slides8 = document.querySelectorAll("#section-no-8 .slide-08");
const prevBtn8 = document.querySelector("#section-no-8 .prev-btn-08");
const nextBtn8 = document.querySelector("#section-no-8 .next-btn-08");

let currentIndex8 = 0;

slides8[currentIndex8].classList.add("active-08");

nextBtn8.addEventListener("click", () => {
  slides8[currentIndex8].classList.remove("active-08");
  currentIndex8 = (currentIndex8 + 1) % slides8.length;
  slides8[currentIndex8].classList.add("active-08");
});

prevBtn8.addEventListener("click", () => {
  slides8[currentIndex8].classList.remove("active-08");
  currentIndex8 = (currentIndex8 - 1 + slides8.length) % slides8.length;
  slides8[currentIndex8].classList.add("active-08");
});

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
// image section 10

const slidesContainer10 = document.querySelector("#section-no-10 .slides-10");
const slides10 = document.querySelectorAll("#section-no-10 .slide-10");
const prevBtn10 = document.querySelector("#section-no-10 .prev-btn-10");
const nextBtn10 = document.querySelector("#section-no-10 .next-btn-10");

let currentIndex10 = 0;

slides10[currentIndex10].classList.add("active-10");

nextBtn10.addEventListener("click", () => {
  slides10[currentIndex10].classList.remove("active-10");
  currentIndex10 = (currentIndex10 + 1) % slides10.length;
  slides10[currentIndex10].classList.add("active-10");
});

prevBtn10.addEventListener("click", () => {
  slides10[currentIndex10].classList.remove("active-10");
  currentIndex10 = (currentIndex10 - 1 + slides10.length) % slides10.length;
  slides10[currentIndex10].classList.add("active-10");
});

// image section 11

const slidesContainer11 = document.querySelector("#section-no-11 .slides-11");
const slides11 = document.querySelectorAll("#section-no-11 .slide-11");
const prevBtn11 = document.querySelector("#section-no-11 .prev-btn-11");
const nextBtn11 = document.querySelector("#section-no-11 .next-btn-11");

let currentIndex11 = 0;

slides11[currentIndex11].classList.add("active-11");

nextBtn11.addEventListener("click", () => {
  slides11[currentIndex11].classList.remove("active-11");
  currentIndex11 = (currentIndex11 + 1) % slides11.length;
  slides11[currentIndex11].classList.add("active-11");
});

prevBtn11.addEventListener("click", () => {
  slides11[currentIndex11].classList.remove("active-11");
  currentIndex11 = (currentIndex11 - 1 + slides11.length) % slides11.length;
  slides11[currentIndex11].classList.add("active-11");
});

// image section 12

const slidesContainer12 = document.querySelector("#section-no-12 .slides-12");
const slides12 = document.querySelectorAll("#section-no-12 .slide-12");
const prevBtn12 = document.querySelector("#section-no-12 .prev-btn-12");
const nextBtn12 = document.querySelector("#section-no-12 .next-btn-12");

let currentIndex12 = 0;

slides12[currentIndex8].classList.add("active-12");

nextBtn12.addEventListener("click", () => {
  slides12[currentIndex8].classList.remove("active-12");
  currentIndex8 = (currentIndex8 + 1) % slides12.length;
  slides12[currentIndex8].classList.add("active-12");
});

prevBtn12.addEventListener("click", () => {
  slides12[currentIndex8].classList.remove("active-12");
  currentIndex8 = (currentIndex8 - 1 + slides12.length) % slides12.length;
  slides12[currentIndex8].classList.add("active-12");
});

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

// here

window.addEventListener("load", function () {
  const body = document.body;
  const html = document.documentElement;

  if (body.scrollHeight <= window.innerHeight) {
    body.style.height = "100%";
    html.style.height = "100%";
  }
});
