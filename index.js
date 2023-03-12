const sumFunc = require("./operations/sum.js")
const multFunc = require("./operations/multiply.js")
const minusFunc = require("./operations/minus.js")
const divideFunc = require("./operations/divide.js")
const maxFunc = require("./operations/maxNum.js")
const minFunc = require("./operations/minNum.js")
const arr = [1, 2, 3, 4, 5]
const sum = sumFunc.sum(arr)
const mult = multFunc.multiply(arr)
const minus = minusFunc.minus(arr)
const divide = divideFunc.divide(arr)
const maxNum = maxFunc.maxNum(arr)
const minNum = minFunc.minNum(arr)
console.log(sum, mult, minus, divide, maxNum, minNum);