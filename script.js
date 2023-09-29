const up = document.getElementById("btn__up");
const down = document.getElementById("btn__down");
const sliderRight = document.getElementById("slider-right");
const sliderLeft = document.getElementById("slider-left");
let slide = 0;

const changeSlide = () => {
      sliderRight.style.bottom = -100 * slide + "%";
      sliderLeft.style.top = -100 * slide + "%";
}
up.addEventListener("click", e => {
      slide = slide === 4 ? 0 : slide + 1;
      changeSlide();
})
down.addEventListener("click", e => {
      slide = slide === 0 ? 4 : slide - 1;
      changeSlide();
})
window.addEventListener("wheel", e => {
      if (e.deltaY > 0)
            slide = slide === 4 ? 0 : slide + 1;
      else
            slide = slide === 0 ? 4 : slide - 1;

      changeSlide();
})
