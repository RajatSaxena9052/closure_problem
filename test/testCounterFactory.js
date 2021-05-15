const counterFactory = require("../counterFactory")
let result = counterFactory()

console.log(result.increment())
console.log(result.increment())
console.log(result.increment())
console.log(result.decrement())
