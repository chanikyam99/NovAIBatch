var arr = [1, 10, 3.14, 'Masai', null, undefined, 'Deepak', 20251125] // index starts with 0.

console.log(arr)

console.log(arr.length)

console.log(arr[0])

console.log(arr[1])

var cars = ["BMW", 'Mercedes', 'Audi', 'Tata', 'Mahindra']

console.log(cars)

//Push & Pop -> works at the end of an array.

cars.push("MG") // add an element at the end of an array.

console.log(cars)

cars.pop() // Remove the last element from the array.

console.log(cars)

cars.pop()
console.log(cars)

// Shift & Unshift.
cars.unshift('Mini Cooper')

console.log(cars)

cars.shift()
cars.shift()
console.log(cars)

//TODO: split and join - Used to add or delete element from the middle of the array.


//splice.
var arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

var arr2 = arr1.splice(4, 2) // [50, 60] // Starting from index 4, take 2 elements including index = 4.

console.log(arr1) // [10, 20, 30, 40, 70, 80, 90]
console.log(arr2) // [50, 60]