// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
//   const toggle = document.getElementById("toggleDark");
//   toggle.classList.toggle("bxs-moon");
// }

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bxs-moon");
  if (this.classList.toggle("bx-moon")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});
