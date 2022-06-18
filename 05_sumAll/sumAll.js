const sumAll = function (int1, int2) {
    if (!(int1 > 0) || !(int1 > 0)) {
        return "ERROR"
    }
    if (!(typeof int1 == "number") || !(typeof int2 == "number")) {
        return "ERROR"
    }

    if (int1 < int2) {
        lowerInt = int1;
        upperInt = int2;
    }
    else {
        lowerInt = int2;
        upperInt = int1;
    }

    result = 0;

    while (lowerInt <= upperInt) {
        result += lowerInt;
        lowerInt++;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
