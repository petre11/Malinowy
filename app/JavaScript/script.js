$(document).ready(function() {

  //Folding mobile sub menu
  let subMenuBtn = document.querySelectorAll('.mobile_menu_add');
  let button = document.querySelectorAll('.mobile_menu_add');
  for (var i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function() {
      $(this).next().slideToggle(300);
    });
  }

  //Slider
  let SlideToggle = (element, classEl1, classEl2) => {
    element.classList.remove(classEl1);
    element.classList.add(classEl2);
  };

  let CircleToogle = (element1, element2, classEl) => {
    element1.classList.add(classEl);
    element2.classList.remove(classEl)
  };

  let circle1 = document.querySelector('#circle1');
  let circle2 = document.querySelector('#circle2');
  let sliderCircles = document.querySelectorAll('.circle')
  let slideWrapper = document.querySelector('#slideWrapper');

  circle1.addEventListener('click', function() {
    CircleToogle(circle2, circle1, 'circle_hide');
    SlideToggle(slideWrapper, 'slideRight', 'slideLeft');
  });

  circle2.addEventListener('click', function() {
    CircleToogle(circle1, circle2, 'circle_hide');
    SlideToggle(slideWrapper, 'slideLeft', 'slideRight');
  });
  //Switch to RWD menu
  var burgerMenu = $('.burgerMenu');
  var mobile_menu = $('.mobile_menu');
  var shadow = $('.shadow');

  burgerMenu.click(function() {
    $(this).toggleClass('rwd');
    mobile_menu.toggleClass('mobile_menu_hide mobile_menu_visible');
    shadow.toggleClass('shadow_hide shadow_visible');
  });

});
