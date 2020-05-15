// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

// Create a variable called prevScrollpos and measure the number of pixels scrolled along the Y axis
var prevScrollpos = window.pageYOffset;

/* When the previous scroll position is greater than the current position (i.e. User scrolls up) change the style of the navigation element so that it is at 0px of the top of the screen. Otherwise (User scrolls down) and change the positionig to outside the view of the user -130px
*/
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}