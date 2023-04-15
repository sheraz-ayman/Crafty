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

// Servicepage script start

// Serviepage imageslider script start
const prevButton = document.getElementsByClassName("prev");
const nextButton = document.getElementsByClassName("next");
prevButton[0].addEventListener("click", function () {
  plusSlides(-1);
});
nextButton[0].addEventListener("click", function () {
  plusSlides(1);
});

const firstDot = document.getElementsByClassName("dot1");
const secondDot = document.getElementsByClassName("dot2");
const thirdDot = document.getElementsByClassName("dot3");
const fourthDot = document.getElementsByClassName("dot4");
firstDot[0].addEventListener("click", function () {
  currentSlide(1);
});
secondDot[0].addEventListener("click", function () {
  currentSlide(2);
});
thirdDot[0].addEventListener("click", function () {
  currentSlide(3);
});
fourthDot[0].addEventListener("click", function () {
  currentSlide(4);
});

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("service-myslide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Serviepage imageslider script end

// Order now value start
var orderSelect = document.getElementsByClassName("order-now-select")[0];
orderSelect.addEventListener("change", changingMoney);
function changingMoney() {
  var orderSelect = document.getElementsByClassName("order-now-select");
  var orderSelectValue = orderSelect[0].value;
  var orderTotalMoney = document.getElementsByClassName("total-money-amount");

  orderTotalMoney[0].innerHTML = parseInt(orderSelectValue) * 150 + "$";
}
// Order now value end

// Servicepage script end






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
	}
	else {
		filter[0].style.translate = "0%";
	}
}

// common question
var commonArrow = document.getElementsByClassName("common-question-container");
var commonAnswer = document.getElementsByClassName("common-answer");
var arroww = document.getElementsByClassName("arroww");
commonArrow[0].addEventListener("click", CommonArrow);
function CommonArrow() {
  if (commonAnswer[0].style.transform == "translate(0%)") {
    commonAnswer[0].style.transform = "translate(-1030%)";
  } else {
    commonAnswer[0].style.transform = "translate(0%)";
  }
}

commonArrow[0].addEventListener("click", flap);

function flap() {
  if (commonAnswer[0].style.transform == "translate(0%)") {
    arroww[0].style.rotate = "90deg";
  } else {
    arroww[0].style.rotate = "00deg";
  }
}
