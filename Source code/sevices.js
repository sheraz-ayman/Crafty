const sidebarArrow = document.getElementsByClassName("arrow-container");
const sidebarList = document.getElementsByClassName("sub-category");
const sidebarMovement = document.getElementsByClassName("sidebar");
const menuButton = document.getElementsByClassName("burger-menu");
const submenu1 = document.getElementsByClassName("aside-main-category");
const submenu2 = document.getElementsByClassName("aside-main-contactus");

// Categories function start
submenu1[0].addEventListener("click", openSub1);
function openSub1() {
  if (sidebarList[0].style.display == "flex") {
    sidebarList[0].style.display = "none";
    sidebarArrow[0].style.rotate = "0deg";
  } else {
    sidebarList[0].style.display = "flex";
    sidebarArrow[0].style.rotate = "90deg";
  }
}
// Categories function end

// Contact us function start
submenu2[0].addEventListener("click", openSub2);
function openSub2() {
  if (sidebarList[1].style.display == "flex") {
    sidebarList[1].style.display = "none";
    sidebarArrow[1].style.rotate = "0deg";
  } else {
    sidebarList[1].style.display = "flex";
    sidebarArrow[1].style.rotate = "90deg";
  }
}
// Contact us function end

// Side movement function start
menuButton[0].addEventListener("click", SlideSidebar);
function SlideSidebar() {
  if (sidebarMovement[0].style.transform == "translate(0%)") {
    sidebarMovement[0].style.transform = "translate(-100%)";
  } else {
    sidebarMovement[0].style.transform = "translate(0%)";
  }
}
// Side movement function end

var icon = document.getElementsByClassName("Ficon");
var filter = document.getElementsByClassName("filter");
icon[0].addEventListener("click", drop);
function drop() {
  if (filter[0].style.translate == "0%") {
    filter[0].style.translate = "-100%";
  } else {
    filter[0].style.translate = "0%";
  }
}
