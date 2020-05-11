// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

var prevScrollpos = window.pageYOffset;

/* When the window detects a scroll upwards move the navigation element move the navigation 
element downwards showing it to the user
The whole script moves the navigation off the page (-130px) when the user scrolls down
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