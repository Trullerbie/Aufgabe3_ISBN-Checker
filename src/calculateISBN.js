function calculateISBNChecksum(num) {
  numArray = num.split("");
  var output = [];
  var calc = 0;
  var checkSum = "";

  if (num.length != 10) {
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
