const max = require("./maxNum.js")
const min = require("./minNum.js")
const divide = (arr) => max.maxNum(arr) / min.minNum(arr)

module.exports = { divide }