/**
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function (num) {
    //  fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
    // last[i]记录的是每个数所在的位置
    let last = new Array(10).fill(-1);
    // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
    // 将num拆分成一个数组
    num = Array.from(num.toString());
    //找到相同值最后出现的位置
    // 将num中每个数字的下标存储到last中
    for (let i = 0; i < num.length; i++) {
        last[num[i] - '0'] = i;
    }
    //原数组从左到右遍历，索引数组从后往前遍历
    //遇到比当前位值大的，交换，因为索引数组从后往前遍历的，所以保证了值为最大
    // 从后面找保证了值为最大的
    for (let i = 0; i < num.length; i++) {
        for (let d = 9; d > (num[i] - '0'); d--) {
            // 循环找到该数字之后最大的数字
            if (last[d] > i) {
                // 数字交换位置
                let temp = num[last[d]];
                num[last[d]] = num[i];
                num[i] = temp;
                return Number(num.join(""));
            }
        }
    }
    // 如果当前顺序就是最大的数值,直接返回
    return Number(num.join(""));
};
console.log(maximumSwap(1024));// 4021