const reverseString = function (string) {
    revString = ""
    strLen = string.length

    for (i = 0; i < strLen; i++) {
        revString += string.slice(-1);
        string = string.slice(0, -1);
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
