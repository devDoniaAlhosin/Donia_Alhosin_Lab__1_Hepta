// Access the Images
let slideImages = document.querySelectorAll(".slides img");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].classList.remove("active");
  dots[counter].classList.remove("active");
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].classList.add("active");
  dots[counter].classList.add("active");
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].classList.remove("active");
  dots[counter].classList.remove("active");
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].classList.add("active");
  dots[counter].classList.add("active");
}

// Auto sliding
let deletInterval;
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// Add click event to the indicators
dots.forEach((dot) => {
  dot.addEventListener("click", () => switchImage(dot));
});

function switchImage(currentDot) {
  // Remove active class from all images and dots
  slideImages.forEach((img) => img.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Get the index of the clicked dot
  let index = currentDot.getAttribute("attr");

  // Update counter and add active class to the clicked dot and corresponding image
  counter = parseInt(index);
  slideImages[counter].classList.add("active");
  currentDot.classList.add("active");
}
