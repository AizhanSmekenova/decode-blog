const max = require("./maxNum.js")
const min = require("./minNum.js")
const minus = (arr) => max.maxNum(arr) - min.minNum(arr)

module.exports = { minus }