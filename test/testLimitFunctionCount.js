let limitFunctionCount = require("../limitFunctionCount")
let callBack = (count) => {
    return "from callback count is " + count
};

let result = limitFunctionCount(callBack, 2)
console.log(result())
console.log(result())
console.log(result())
console.log(result())