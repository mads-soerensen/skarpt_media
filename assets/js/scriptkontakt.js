// Topnav
let topNav = document.getElementById("topnav");

function Open() {
  topNav.style.width = "100vw";
}

function Close() {
  topNav.style.width = "0";
}

function checkForm(form) {
  if (!form.terms.checked) {
    alert("Venligst bevis du ikke er en bot ved at trykke på checkboksen");
    form.terms.focus();
    return false;
  }
  return true;
}