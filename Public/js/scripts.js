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

//multer settings
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,'./public/img/upload');
//     },
//     filename:function(req, file, cb){
//         cb(null, file.filedname + '-' + Date.now());
//     }
// })

// const uploadFile = multer({ storage: storage });

// app.post('/uploadfile', uploadFile.single('myFile'), (req, res) =>{
//     console.log(req.file)
//     //res.send('Archivo subido correctamente')
// })
