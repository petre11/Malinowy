console.log("Hello Hamburger");
document.addEventListener("DOMContentLoaded", function(event) {

  var hamburger_button = document.querySelector('.hamburger_button');
  var cross = document.querySelector('.cross');
  var hamburger_menu = document.querySelector('.mobile_menu');
  var mobile_menu = document.querySelector('.mobile_menu');

    hamburger_button.addEventListener('click', function() {
        hamburger_menu.style.left = "0%";
        hamburger_button.style.display= "none";
        cross.style.display ="block";
        mobile_menu.style.boxShadow ="300px 0px 0px 0px rgba(60,60,60,0.6)";

    });

    cross.addEventListener('click', function() {
        hamburger_menu.style.left = "-50%";
        hamburger_button.style.display= "block";
        cross.style.display="none"
        mobile_menu.style.boxShadow ="none";

    });

});
