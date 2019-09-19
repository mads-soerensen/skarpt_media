// Skifter til tablet/desktop hvis:
if (window.innerWidth < 1024) {
    window.location = "tidlcases.html";
}


// Topnav
let topNav = document.getElementById("topnav");

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

function Open() {
    topNav.style.width = "100vw";
}

function Close() {
    topNav.style.width = "0";
}


//Open modals
// Rekrutterings modal
document.getElementById("rekBtn").addEventListener("click", function () { openModal("rekModal") });
document.getElementById("rekBtntext").addEventListener("click", function () { openModal("rekModal") });
// Produktvideo
document.getElementById("prodBtn").addEventListener("click", function () { openModal("prodModal") });
document.getElementById("prodBtnText").addEventListener("click", function () { openModal("prodModal") });
// Dronevideo
document.getElementById("drnBtn").addEventListener("click", function () { openModal("drnModal") });
document.getElementById("drnBtntext").addEventListener("click", function () { openModal("drnModal") });
// Eventvideo
document.getElementById("eventBtn").addEventListener("click", function () { openModal("eventModal") });
document.getElementById("eventBtntext").addEventListener("click", function () { openModal("eventModal") });
// Profilvideo
document.getElementById("profBtn").addEventListener("click", function () { openModal("profilModal") });
document.getElementById("profBtntext").addEventListener("click", function () { openModal("profilModal") });
// Reklamevideo
document.getElementById("reklamBtn").addEventListener("click", function () { openModal("reklamModal") });
document.getElementById("reklamBtntext").addEventListener("click", function () { openModal("reklamModal") });



// 
// 
//close modals
// Rekrutterings modal
document.getElementsByClassName("ydelseclose")[0].addEventListener("click", function () { closeMod("rekModal") });
// Produktvideo
document.getElementsByClassName("ydelsecloseprod")[0].addEventListener("click", function () { closeMod("prodModal") });
// Dronevideo
document.getElementsByClassName("ydelseclosedrn")[0].addEventListener("click", function () { closeMod("drnModal") });
// Eventvideo
document.getElementsByClassName("ydelsecloseevent")[0].addEventListener("click", function () { closeMod("eventModal") });
// Profilvideo
document.getElementsByClassName("ydelsecloseprofil")[0].addEventListener("click", function () { closeMod("profilModal") });
// Reklamevideo
document.getElementsByClassName("ydelseclosereklam")[0].addEventListener("click", function () { closeMod("reklamModal") });


// Open telephone
document.getElementById("myBtn").addEventListener("click", function () { openModal("myModal") });
// Close telephone
document.getElementsByClassName("close")[0].addEventListener("click", function () { closeMod("myModal") });





