document.addEventListener("DOMContentLoaded", function () {
  function handlePosition() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".slider__container");
    const track = document.querySelector(".slider__track");
    const items = document.querySelectorAll(".readiness__slider-content");
    const btnNext = document.querySelector(".top__btn");
    const btnPrev = document.querySelector(".bottom__btn");
    const itemCount = items.length; 
    let itemWidth = container.clientWidth / slidesToShow;
    let movePosition = slidesToScroll * itemWidth;
    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });
    btnPrev.addEventListener("click", function () {
      const itemLeft = Math.abs(position) / itemWidth;

      position +=
        itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
      setPosition();
      checkBtns();
    });
    btnNext.addEventListener("click", function () {
      const itemLeft =
        itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

      position -=
        itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
      setPosition();
      checkBtns();
    });
    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    };
    const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
    };

    checkBtns();
  }
  window.addEventListener("resize", handlePosition);
  handlePosition();
});
