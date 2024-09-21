const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const iconContainer = document.querySelector(".icon-container");

const scrollAmount = 800;

leftArrow.style.visibility = "hidden";

leftArrow.addEventListener("click", () => {
  iconContainer.scrollBy({
    left: -scrollAmount,
    behaviour: "smooth",
  });
  checkArrows();
});

rightArrow.addEventListener("click", () => {
  iconContainer.scrollBy({
    left: scrollAmount,
    behaviour: "smooth",
  });
  checkArrows();
});

function checkArrows() {
  const scrollPosition = iconContainer.scrollLeft;
  const containerWidth = iconContainer.offsetWidth;
  const scrollWidth = iconContainer.scrollWidth;

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
