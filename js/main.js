var menuButton = document.querySelector(".navbar__menu-button");
var menuList = document.querySelector('.menu');
menuButton.addEventListener('click', function(){
   menuList.classList.toggle('menu__active');
   menuButton.classList.toggle('navbar__menu-button_active')
})

var likeButtons = document.querySelectorAll('.catalog__button_like');
for (let i = 0; i < likeButtons.length; i++) {
   likeHandler(likeButtons[i])
}
   
let reviewsSlider = document.querySelector('.reviews__list')
window.onresize = changeReviewsType;

let select = document.querySelector('.select__checked');
let dropdown = document.querySelector('.select__dropdown');
let value = document.querySelector('#select-type');
let caret = document.querySelector('.select__caret');

select.addEventListener('mouseup', toggleSelect);

let options = document.querySelectorAll('.select__option');
for (let i = 0; i < options.length; i++) {
   chooseOption(options[i]);
}

let reviewsBlock = document.querySelector('.reviews');
let mapBlock = document.querySelector('.contacts__map');
let mapScript = document.createElement('script');


window.addEventListener('scroll', getReviewsCoordinates)


// jQuery plugins

$(window).on("load", function () {
   $(".before__box").twentytwenty({
      default_offset_pct: 0.3,
      move_with_handle_only: true,
      before_label: 'Без скинали',
      after_label: 'Со скинали',
   });

   $('.before__slider').slick({
      draggable: false,
      swipe: false,
      dots: true,
      dotsClass: 'before__slider-dots',
      prevArrow: $('.arrow-left'),
      nextArrow: $('.arrow-right')
   })

   $('.reviews__slider').slick({
      dots: true,
      dotsClass: 'reviews__slider-dots',
      prevArrow: $('.reviews__arrow-left'),
      nextArrow: $('.reviews__arrow-right'),
      
   })


})


function getReviewsCoordinates() {
      if (reviewsBlock.getBoundingClientRect().top < 0) {
         window.removeEventListener('scroll', getReviewsCoordinates);
         console.log('Гружу карту');
         
         mapScript.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Addab9bf9b5617bf931ed0cd15bdd0a5a96dc4bbd227c49a6d319ccd7bc61b403&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false');
         mapBlock.appendChild(mapScript);
      }
}

function likeHandler(likeButton) {
   likeButton.addEventListener('click', function () {
      likeButton.innerHTML = '<img src="img/catalog/heart-active.png" alt=""></img>'
   })
}

function changeReviewsType() {
   if (document.body.clientWidth < 768) {
      reviewsSlider.classList.add('reviews__slider');
   }
   else {
      reviewsSlider.classList.remove('reviews__slider');
   }
}

function chooseOption(option) {
   option.addEventListener('click', function () {
      dropdown.classList.toggle('select__dropdown-active');
      caret.classList.toggle('select__caret-active');
      value.value = option.getAttribute('data-value');
      select.innerHTML = value.value;

   })
}

function toggleSelect() {
      dropdown.classList.toggle('select__dropdown-active');
      caret.classList.toggle('select__caret-active');
}



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector('' + blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}