//Object in JS - Key:Value pair for an entity.

let car = {
    color : 'Black',
    model : 'Xuv700',
    seats : 7,
    topspeed : '250Km/hr',
    competitors : ['Tata Safari', 'MG Hector'],
    transmission : ['Manual', 'Automatic'],
    isFiveStarSafetyRated : true,
    topspeed : '300Km/hr',
    seats : 5,
    //nested object.
    brand : {
        name : 'Mahindra',
        country : 'India',
        year : 1990,
        founder : {
            name : "Mr. Mahindra",
            age : 60,
            birthplace : 'India'
        }
    }
}

//Object attributes can be accessed via dot operator or [].

console.log(car)
// console.log(car.model)
console.log(car['model'])

//console.log(car.topspeed)
console.log(car['topspeed'])

//console.log(car.brand.founder.name)
console.log(car['brand']['founder']['name'])

let x = 10 //declaration of a variable.

x = 20; // re-declaration. 
