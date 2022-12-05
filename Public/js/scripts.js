var interval = 1;
var interval2 = 1;
var slider = document.location.pathname == "/";
var submenuSelected = "";
function mostrarMenuMobile() {
  let menu = document.getElementById("menu-mobile");
  if (menu.classList.contains("ocultar")) {
    menu.classList.remove("ocultar");
  } else {
    menu.classList.add("ocultar");
  }
}
function mostrarSlide(slideIndex) {
  if (slideIndex == -1 && interval != 1) slideIndex = interval - 1;
  if (slideIndex == 0 && interval != 1) slideIndex = interval + 1;
  if (slideIndex < 1) slideIndex = 2;
  if (slideIndex > 6) slideIndex = 6;
  let sliderItemActive = document.getElementsByClassName("slider-item active");
  let element = document.getElementById("slide" + slideIndex);
  let element_ = document.getElementById("slide_" + slideIndex);
  sliderItemActive[0].classList.remove("active");
  element.classList.add("active");
  element_.classList.add("active");
  interval = slideIndex;
}
function mostrarSlide2(slideIndex) {
  if (slideIndex == -1 && interval2 != 1) slideIndex = interval2 - 1;
  if (interval2 != 1) slideIndex = interval2 + 1;
  if (interval2 <= 1) slideIndex = 2;
  if (interval2 >= 3) slideIndex = 1;
  let sliderItemActive = document.getElementsByClassName("slider-item2 active");
  let element = document.getElementById("slide2" + slideIndex);
  sliderItemActive[0].classList.remove("active");
  element.classList.add("active");
  interval2 = slideIndex;
}
if (slider) {
  setInterval(function () {
    if (interval >= 6) interval = 0;
    interval++;
    mostrarSlide(interval);
  }, 10000);
}
function mostrarMenu(menu) {
  if (menu != submenuSelected) {
    if (submenuSelected.length > 0) {
      document.getElementById(submenuSelected).classList.remove("show-submenu");
    }
    submenuSelected = menu;
    document.getElementById(menu).classList.add("show-submenu");
  } else {
    document.getElementById(menu).classList.remove("show-submenu");
    submenuSelected = "";
  }
}

function mostrarMenu(menu) {
  if (menu != submenuSelected) {
    if (submenuSelected.length > 0) {
      document.getElementById(submenuSelected).classList.remove("show-submenu");
    }
    submenuSelected = menu;
    document.getElementById(menu).classList.add("show-submenu");
  } else {
    document.getElementById(menu).classList.remove("show-submenu");
    submenuSelected = "";
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

const cartInfo = document.getElementById("cart-info");
const cart = document.getElementById("cart");
