window.addEventListener("load", init);




/* function init(){
    window.onscroll = function() {scroll()};
    console.log(document.querySelector("header").clientHeight);
    console.log(document.body.scrollTop);
}

function scroll(){
    let elem = document.querySelectorAll("navbar");
     console.log(document.querySelector("header").clientHeight);
    console.log(document.body.scrollTop); 
    if (document.main.scrollTop > document.querySelector("header").clientHeight) {
        console.log("bement");
        elem[0].style.top = "0";
        elem[0].style.position = "fixed";
        
    } else {
        console.log("bent else");
        elem[0].style.top = "auto";
       elem[0].style.position = "static";
        
    }
    console.log("nem ment be");
} */
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