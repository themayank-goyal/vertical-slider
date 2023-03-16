const slider = document.querySelector('.slider');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const sliderLength = leftSlide.querySelectorAll('div').length;
console.log(sliderLength);

let activeSlide = 0;

leftSlide.style.top = `-${(sliderLength - 1)*100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  const sliderHeight = slider.clientHeight;
  if(direction === 'up'){
    activeSlide++;
    if(activeSlide > sliderLength-1){
      activeSlide = 0;
    }
  }
  else{
    activeSlide--;
    if(activeSlide < 0){
      activeSlide = sliderLength-1;
    }
  }
  rightSlide.style.transform = `translateY(-${activeSlide*sliderHeight}px)`
  leftSlide.style.transform = `translateY(${activeSlide*sliderHeight}px)`
}

// const sliderContainer = document.querySelector('.slider')
// const slideRight = document.querySelector('.right-slide')
// const slideLeft = document.querySelector('.left-slide')
// const upButton = document.querySelector('.up')
// const downButton = document.querySelector('.down')
// const slidesLength = slideRight.querySelectorAll('div').length

// let activeSlideIndex = 0

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// upButton.addEventListener('click', () => changeSlide('up'))
// downButton.addEventListener('click', () => changeSlide('down'))

// const changeSlide = (direction) => {
//     const sliderHeight = sliderContainer.clientHeight
//     if(direction === 'up') {
//         activeSlideIndex++
//         if(activeSlideIndex > slidesLength - 1) {
//             activeSlideIndex = 0
//         }
//     } else if(direction === 'down') {
//         activeSlideIndex--
//         if(activeSlideIndex < 0) {
//             activeSlideIndex = slidesLength - 1
//         }
//     }

//     slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
//     slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
// }
