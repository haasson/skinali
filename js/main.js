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
   
function likeHandler(likeButton) {
   likeButton.addEventListener('click', function () {
      likeButton.innerHTML = '<img src="img/catalog/heart-active.png" alt=""></img>'
   })
}


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
})