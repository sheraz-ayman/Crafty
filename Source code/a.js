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

// common question
var commonArrow = document.getElementsByClassName("common-question-container");
var commonAnswer = document.getElementsByClassName("common-answer");
var arroww = document.getElementsByClassName("arroww");
commonArrow[0].addEventListener("click", CommonArrow);
arroww[0].addEventListener("chick" ,CommonArrow)
function CommonArrow() {
  if (commonAnswer[0].style.transform == "translate(0%)") {
    commonAnswer[0].style.transform = "translate(-1030%)";
    arroww[0].style.rotate = "0deg";
  } else {
    commonAnswer[0].style.transform = "translate(0%)";
        arroww[0].style.rotate = "90deg";

  }
}




commonArrow[1].addEventListener("click", CommonArrow1);
arroww[1].addEventListener("chick", CommonArrow1);
function CommonArrow1() {
  if (commonAnswer[1].style.transform == "translate(0%)") {
    commonAnswer[1].style.transform = "translate(-1030%)";
    arroww[1].style.rotate = "0deg";
  } else {
    commonAnswer[1].style.transform = "translate(0%)";
    arroww[1].style.rotate = "90deg";
  }
}

commonArrow[2].addEventListener("click", CommonArrow2);
arroww[2].addEventListener("chick", CommonArrow2);
function CommonArrow2() {
  if (commonAnswer[2].style.transform == "translate(0%)") {
    commonAnswer[2].style.transform = "translate(-1030%)";
    arroww[2].style.rotate = "0deg";
  } else {
    commonAnswer[2].style.transform = "translate(0%)";
    arroww[2].style.rotate = "90deg";
  }
}


