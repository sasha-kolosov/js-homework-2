const sliderItem = document.getElementsByClassName('slider__item')
const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev')[0]
const sliderArrowNext = document.getElementsByClassName('slider__arrow_next')[0]

let index = 0

sliderArrowNext.addEventListener('click', () => {
    if(index == sliderItem.length - 1) {
        sliderItem[index].classList.remove('slider__item_active')
        index = 0
        sliderItem[index].classList.add('slider__item_active')
    } else {
        sliderItem[index].classList.remove('slider__item_active')
        index += 1
        sliderItem[index].classList.add('slider__item_active')
    }
})

sliderArrowPrev.addEventListener('click', () => {
    if(index == 0) {
        sliderItem[index].classList.remove('slider__item_active')
        index = 4
        sliderItem[index].classList.add('slider__item_active')
    } else {
        sliderItem[index].classList.remove('slider__item_active')
        index -= 1
        sliderItem[index].classList.add('slider__item_active')
    }
})