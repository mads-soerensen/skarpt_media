// Topnav
let topNav = document.getElementById("topnav");

// Slides
let slideIndex = 1;

// Overflow toggle on modal open and close
let modalOverflow = document.getElementById("body-id");

// Blur
let blur = document.getElementById("mainsite");
let blurNav = document.getElementById("navbarskarptmobil");
let btn = document.getElementById("myBtn");


// Scroll y offset
let scrollOffset = document.getElementById("logoflex");
let scrollOffsetColor = document.getElementById("navbarskarptto");




window.onscroll = function changeStyle() {
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 50) {
        scrollOffset.style.transform = "translate(-20vw, 0)"
        scrollOffset.style.maxHeight = "50px"
        scrollOffsetColor.style.backgroundColor = "#294973"
        // scrollOffset.style.position = "relative"
        scrollOffset.style.maxWidth = "60%"




    } else if (scrollPosY <= 50) {
        scrollOffset.style.transform = "translate(10vw, 25vh)"
        scrollOffset.style.maxHeight = "150px"
        scrollOffsetColor.style.backgroundColor = "transparent"
        scrollOffset.style.position = "fixed"
        scrollOffset.style.maxWidth = "50%"
    }
}



let openModal = function (element) {
    document.getElementById(element).style.visibility = "visible";
    document.getElementById(element).style.opacity = "1";
    blur.style.filter = "blur(8px)";
    blur.style.filter = "-webkit-blur(8px)";
    blurNav.style.filter = "blur(8px)";
    blurNav.style.filter = "-webkit-blur(8px)";
    btn.style.filter = "blur(8px)";
    btn.style.filter = "-webkit-blur(8px)";
    // modalOverflow.style.overflow = "hidden";
}

let closeMod = function (element) {
    document.getElementById(element).style.visibility = "hidden";
    document.getElementById(element).style.opacity = "0";
    blur.style.filter = "blur(0px)";
    blur.style.filter = "-webkit-blur(0px)";
    blurNav.style.filter = "blur(0px)";
    blurNav.style.filter = "-webkit-blur(0px)";
    btn.style.filter = "blur(0px)";
    btn.style.filter = "-webkit-blur(0px)";
    // modalOverflow.style.overflow = "visible";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




function Open() {
    topNav.style.width = "100vw";

}

function Close() {
    topNav.style.width = "0";

}

// Open telephone
document.getElementById("myBtn").addEventListener("click", function () { openModal("myModal") });
// Close telephone
document.getElementsByClassName("close")[0].addEventListener("click", function () { closeMod("myModal") });

// Rekrutterings modal
document.getElementById("rekBtn").addEventListener("click", function () { openModal("rekModal") });
document.getElementById("rekBtntext").addEventListener("click", function () { openModal("rekModal") });

// Rekrutterings modal close
document.getElementsByClassName("ydelseclose")[0].addEventListener("click", function () { closeMod("rekModal") });

// Boje modal open
document.getElementById("bojBtn").addEventListener("click", function () { openModal("bojModal") });
document.getElementById("bojBtntext").addEventListener("click", function () { openModal("bojModal") });

// Boje modal close
document.getElementsByClassName("ydelsecloseboje")[0].addEventListener("click", function () { closeMod("bojModal") });


