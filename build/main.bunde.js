/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/checkisbn.js ***!
  \**************************/
//Aufgabe a
const button = document.getElementById("knopf");
const input = document.getElementById("input");
const validation = document.getElementById("validation");
button.addEventListener("click", checkISBN);

function checkISBN(checkSum) {
  if (input.value[9] === checkSum) {
    validation.innerHTML = "ISBN is valid";
    validation.style.color = "green";
  } else {
    validation.innerHTML = "ISBN is invalid";
    validation.style.color = "red";
  }
}

/******/ })()
;
//# sourceMappingURL=main.bunde.js.map