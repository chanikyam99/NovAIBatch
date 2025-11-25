var a = 10

console.log(a)

var a = 20

//Redeclaration is not a good practice, and ideally shouldn't be allowed.
console.log(a) // var keyword is allowing us to redeclare a variable.

let x = 10

console.log(x)

// let x = 20 // let keyword doesn't allow us to redeclare a variable.

x = 100 // we can re-assign a value to a variable.

console.log(x)

const y = 50

console.log(y)

// const y = 60 // const keyword doesn't allow us to redeclare a variable.

y = 60 // const doesn't allow re-assignment also.

console.log(y)
