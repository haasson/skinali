// Кнопка Меню
var menuButton = document.querySelector(".navbar__menu-button");
var menuList = document.querySelector('.menu');
menuButton.addEventListener('click', toggleMenu)

// Кнопки лайк
var likeButtons = document.querySelectorAll('.catalog__button_like');
for (let i = 0; i < likeButtons.length; i++) {
   likeHandler(likeButtons[i])
}
   
// Слайдер отзывов
let reviewsSlider = document.querySelector('.reviews__list')
window.onresize = changeReviewsType;

// Селект формы
let select = document.querySelector('.select__checked');
let dropdown = document.querySelector('.select__dropdown');
let value = document.querySelector('#select-type');
let caret = document.querySelector('.select__caret');

select.addEventListener('mouseup', toggleSelect);

let options = document.querySelectorAll('.select__option');
for (let i = 0; i < options.length; i++) {
   chooseOption(options[i]);
}

// Подгрузка карты
let reviewsBlock = document.querySelector('.reviews');
let mapBlock = document.querySelector('.contacts__map');
let mapScript = document.createElement('script');

window.addEventListener('scroll', getReviewsCoordinates)

// Плавная прокрутка к разделам
let anchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchors.length; i++) {
   setAnchor(anchors[i])
}

// Плавная прокрутка к началу страницы на мобильных
let float = document.querySelector('.float');
float.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
})

// ---------------  jQuery plugins ------------

$(window).on("load", function () {
   // 20-20 слайдер
   $(".before__box").twentytwenty({
      default_offset_pct: 0.3,
      move_with_handle_only: true,
      before_label: 'Без скинали',
      after_label: 'Со скинали',
   });

   // Слайдер раздера До-после
   $('.before__slider').slick({
      draggable: false,
      swipe: false,
      dots: true,
      dotsClass: 'before__slider-dots',
      prevArrow: $('.arrow-left'),
      nextArrow: $('.arrow-right')
   })

   // Слайдер блока отзывов
   $('.reviews__slider').slick({
      dots: true,
      dotsClass: 'reviews__slider-dots',
      prevArrow: $('.reviews__arrow-left'),
      nextArrow: $('.reviews__arrow-right'),
      
   })
})



// ------------ Объявления функций --------------

// Переключение класса меню
function toggleMenu() {
      menuList.classList.toggle('menu__active');
      menuButton.classList.toggle('navbar__menu-button_active');
}

// Обработчик лайков 
function likeHandler(likeButton) {
   likeButton.addEventListener('click', function () {
      likeButton.innerHTML = '<img src="img/catalog/heart-active.png" alt=""></img>'
   })
}

// Изменение вида блока отзывов в зависимости от разрешения экрана
function changeReviewsType() {
   if (document.body.clientWidth < 768) {
      reviewsSlider.classList.add('reviews__slider');
   }
   else {
      reviewsSlider.classList.remove('reviews__slider');
   }
}

// Обработчик кликов по опциям в селекте формы
function chooseOption(option) {
   option.addEventListener('click', function () {
      dropdown.classList.toggle('select__dropdown-active');
      caret.classList.toggle('select__caret-active');
      value.value = option.getAttribute('data-value');
      select.innerHTML = value.value;

   })
}

// Переключение класса дропдауна селекта
function toggleSelect() {
      dropdown.classList.toggle('select__dropdown-active');
      caret.classList.toggle('select__caret-active');
}

// Подгрузка карты если доскроллили до блока отзывов
function getReviewsCoordinates() {
      if (reviewsBlock.getBoundingClientRect().top < 0) {
         window.removeEventListener('scroll', getReviewsCoordinates);

         mapScript.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Addab9bf9b5617bf931ed0cd15bdd0a5a96dc4bbd227c49a6d319ccd7bc61b403&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false');
         mapBlock.appendChild(mapScript);
      }
}

// Плавная прокрутка к блокам
function setAnchor(anchor) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let blockName = anchor.getAttribute('href');
      let block = document.querySelector(blockName);
      
      if (document.body.clientWidth < 768) {
         window.scrollTo({
            top: getCoords(block).top,
            behavior: 'smooth'
         });
         toggleMenu();
      }
      else {
         window.scrollTo({
            top: getCoords(block).top - 80,
            behavior: 'smooth'
         });
      }
      
   }); 
}

// Получение абсолютных координат элемента страницы
function getCoords(elem) {
   var box = elem.getBoundingClientRect();
   return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
   }
}