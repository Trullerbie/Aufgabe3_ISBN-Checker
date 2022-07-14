/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkisbn.js":
/*!**************************!*\
  !*** ./src/checkisbn.js ***!
  \**************************/
/***/ ((module) => {

//Aufgabe d in einer Datei zusammengefügt, Variablen umgenannt
//Variablen aus HTML holen
const checkButton = document.getElementById("checkButton");
const inputTxt = document.getElementById("inputText");
const validation = document.getElementById("validation");
checkButton.addEventListener("click", checkISBN);
//Aufgabe e
inputTxt.addEventListener("focus", resetInfoText);

function checkISBN() {
  var txt = inputTxt.value;
  var checkSum = calculateISBNChecksum(txt);
  if (txt[9] == checkSum || (checkSum == "10" && txt[9] == "X")) {
    validation.innerHTML = "ISBN is valid";
    validation.style.color = "green";
  } else {
    validation.innerHTML = "ISBN is invalid";
    validation.style.color = "red";
  }
}

function calculateISBNChecksum(input) {
  numArray = input.split("");
  var output = [];
  var calc = 0;
  var checkSum = "";

  console.log(input)
  if (input.length != 10) {
    return "Die ISBN darf nur aus 10 Ziffern bestehen";
  } else {
        for (let i = 0; i < 9; i++) {
        output[i] = parseInt(numArray[i]) * (i + 1);
        calc += output[i];
        }
    checkSum = calc % 11;
    return checkSum.toString();
  }
}

module.exports = {
  calculateISBNChecksum,
};

function resetInfoText(){
  validation.innerHTML = "";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkisbn.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bunde.js.map