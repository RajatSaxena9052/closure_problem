const cacheFunction = require("../cacheFunction")
const callBack = () => "called callback";

const result = cacheFunction(callBack)
console.log(result(2))
console.log(result(2))
console.log(result(4))