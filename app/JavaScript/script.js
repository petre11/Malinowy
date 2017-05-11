$(document).ready(function(){

//fold mobile sub mneu
var subMenuBtn = document.querySelectorAll('.mobile_menu_add');
var button = document.querySelectorAll('.mobile_menu_add');
  for (var i = 0; i < button.length; i++){

    button[i].addEventListener('click',function(){
        $(this).next().slideToggle(300);
    });
  }

//slider
  var circle1 = document.querySelector('#circle1');
  var circle2 = document.querySelector('#circle2');
  var sliderCircles = document.querySelectorAll('.circle')
  var slideWrapper = document.querySelector('#slideWrapper');

  circle1.addEventListener('click',function(){
    circle2.classList.add('circle_hide');
    circle1.classList.remove('circle_hide');
    slideWrapper.classList.remove('slideRight');
    slideWrapper.classList.add('slideLeft');
  });

  circle2.addEventListener('click',function(){
    circle1.classList.add('circle_hide');
    circle2.classList.remove('circle_hide');
    slideWrapper.classList.remove('slideLeft');
    slideWrapper.classList.add('slideRight');
  });

//Switch to RWD menu
  var hamburger_button = document.querySelector('.hamburger_button');
  var cross = document.querySelector('.cross');
  var hamburger_menu = document.querySelector('.mobile_menu');
  var mobile_menu = document.querySelector('.mobile_menu');
  var shadow = document.querySelector('.shadow');

    hamburger_button.addEventListener('click', function() {
        hamburger_menu.style.left = "0";
        hamburger_button.style.display= "none";
        cross.style.display ="block";
        shadow.style.visibility = "visible"
    });

    cross.addEventListener('click', function() {
        hamburger_menu.style.left = "-400px";
        hamburger_button.style.display= "block";
        cross.style.display="none"
        mobile_menu.style.boxShadow ="none";
        shadow.style.visibility = "hidden"

    });

});
