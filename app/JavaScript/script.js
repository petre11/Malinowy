$(document).ready(function(){

var subMenuBtn = document.querySelectorAll('.mobile_menu_add');
var button = document.querySelectorAll('.mobile_menu_add');

  for (var i = 0; i < button.length; i++){

    button[i].addEventListener('click',function(){
        $("#bekon").slideToggle(600);

        console.log($(this).parent());
    });
  }




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
