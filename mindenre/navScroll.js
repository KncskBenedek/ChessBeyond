window.addEventListener("load", init);

var navbar;
var sticky;
function init(){
    window.onscroll = function() {myFunction()};
    navbar = document.getElementById("navbarID");
    sticky = navbar.offsetTop;
    console.log(sticky);

}

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}