const sumAll = function(startNum, endNum) {

    let sum = 0;

    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR"

    if (startNum <= 0 || endNum <= 0) return "ERROR"

    if (startNum > endNum) {
        let largerNum = startNum;
        startNum = endNum;
        endNum = largerNum;
    }

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
