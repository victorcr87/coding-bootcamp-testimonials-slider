const prevBtn = document.querySelector(".btn__prev");
const nextBtn = document.querySelector(".btn__next");
const sliders = document.querySelectorAll(".slider");

nextBtn.addEventListener("click", () => {
  let currentSlider = document.querySelector(".active");
  let currentIndex = Number(currentSlider.classList[1].split(["-"])[1]);
  console.log(sliders.length);
  if (currentIndex < sliders.length) {
    currentSlider.classList.remove("active");
    currentIndex++;
    currentSlider = document.querySelector(".slider-" + currentIndex);
    currentSlider.classList.add("active");
  } else {
    currentSlider.classList.remove("active");
    currentIndex = 1;
    currentSlider = document.querySelector(".slider-" + currentIndex);
    currentSlider.classList.add("active");
  }
});
prevBtn.addEventListener("click", () => {
  let currentSlider = document.querySelector(".active");
  let currentIndex = Number(currentSlider.classList[1].split(["-"])[1]);
  console.log(sliders.length);
  if (currentIndex > 1) {
    currentSlider.classList.remove("active");
    currentIndex--;
    currentSlider = document.querySelector(".slider-" + currentIndex);
    currentSlider.classList.add("active");
  } else {
    currentSlider.classList.remove("active");
    currentIndex = sliders.length;
    currentSlider = document.querySelector(".slider-" + currentIndex);
    currentSlider.classList.add("active");
  }
});
