function calculateISBNChecksum(num){
    numArray = num.split('')
    var output = []
    var calc = 0
    var checkSum = ""

    for(let i = 0; i < 9; i++){
        output[i] = parseInt(numArray[i]) * (i + 1)
        calc += output[i]
    }

    checkSum = calc % 11
    return checkSum.toString()
}

module.exports = {
    calculateISBNChecksum
}