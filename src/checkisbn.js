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
