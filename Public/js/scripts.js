var interval = 1;
var slider = document.location.pathname == '/';
var submenuSelected = '';

function mostrarMenuMobile(){
    let menu = document.getElementById("menu-mobile");

    if(menu.classList.contains("ocultar")){
        menu.classList.remove("ocultar");
    }
    else{
        menu.classList.add("ocultar")
    }
}

function mostrarSlide(slideIndex) {
    if(slideIndex == -1 && interval != 1) slideIndex = interval-1;
    if(slideIndex == 0  && interval != 1) slideIndex = interval+1;
    if(slideIndex <= 1) slideIndex = 1;
    if(slideIndex > 6) slideIndex = 6;
    let sliderItemActive = document.getElementsByClassName("slider-item active");
    let element = document.getElementById("slide" + slideIndex);
    let element_ = document.getElementById("slide_" + slideIndex);

    sliderItemActive[0].classList.remove("active");
    sliderItemActive[0].classList.remove("active");
    element.classList.add("active");
    element_.classList.add("active");
    interval = slideIndex;
}

if(slider) {
    setInterval(function(){
        if(interval >= 6) interval = 0;
        interval++;
        mostrarSlide(interval);
    }, 7000);
}

function mostrarMenu(menu) {
    if(menu != submenuSelected) {
        if(submenuSelected.length >0) {
            document.getElementById(submenuSelected).classList.remove('show-submenu');
        }
        submenuSelected = menu;
        document.getElementById(menu).classList.add('show-submenu');
    }
    else {
        document.getElementById(menu).classList.remove('show-submenu');
        submenuSelected = '';
    }
}


// // creando filtrado de busqueda en el header
// inputSearch = document.getElementById('inputSearch');


// document.getElementById("inputSearch"). addEventListener("keyup", buscador_interno);

// function buscador_interno(){

// filter = inputSearch .value.toUpperCase();
// li = buscador_item_flex.getElementByTagName('li');

// //recorriendo elementos a filtrar mediante los "li"
// for(i = 0; i< li.length; i++){

//     a = li [i].getElementByTagName("a")[0];
//     textValue = a.textContent || a.innerText;

//     if(textValue.toUpperCase() . indexOf(filter) > -1){
//         li[i].Style.display = "";




//     } else{
//         li [i].style.display = "none";
//     }
// }


// }