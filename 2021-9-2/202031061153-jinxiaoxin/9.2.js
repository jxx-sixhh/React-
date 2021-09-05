/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 特判
    if (num1 === '0')
        return num2;
    if (num2 === '0')
        return num1;
    let len1 = num1.length - 1, len2 = num2.length - 1;
    let result = '', up = 0, current;
    while (len1 >= 0 || len2 >= 0) {
        const a = len1 >= 0 ? num1[len1--] - '0' : 0;
        const b = len2 >= 0 ? num2[len2--] - '0' : 0;
        current = a + b + up;
        up = Math.floor(current / 10);
        result = current % 10 + result;
    }
    if (up === 1) {
        result += up;
    }
    return result;
};
