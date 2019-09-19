// Topnav
let topNav = document.getElementById("topnav");

function Open() {
    topNav.style.width = "100vw";
}

function Close() {
    topNav.style.width = "0";
}



// Overflow toggle on modal open and close
let modalOverflow = document.getElementById("body-id");

// Blur
let blur = document.getElementById("mainsite");
let blurNav = document.getElementById("navbarskarpt");
let btn = document.getElementById("myBtn");



// Modal
let openModal = function (element) {
    document.getElementById(element).style.visibility = "visible";
    document.getElementById(element).style.opacity = "1";
    blur.style.filter = "blur(8px)";
    blur.style.filter = "-webkit-blur(8px)";
    blurNav.style.filter = "blur(8px)";
    blurNav.style.filter = "-webkit-blur(8px)";
    btn.style.filter = "blur(8px)";
    btn.style.filter = "-webkit-blur(8px)";
    modalOverflow.style.overflow = "hidden";
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
    modalOverflow.style.overflow = "visible";
}



// Open telephone
document.getElementById("myBtn").addEventListener("click", function () { openModal("myModal") });
// Close telephone
document.getElementsByClassName("close")[0].addEventListener("click", function () { closeMod("myModal") });