// const camelCase = require('./challenges/camelCaseConter') ;
// const scoreOperator = require('./challenges/scoreCounter') ;

// console.log(camelCase("the-stealth-warrior")) ;
// console.log(scoreOperator (['5', '-2','4', 'C', 'D', '9', '+', '+']))

/** THIS VALUE, FUNCTION INVOCATION */
// function show() {
//     "use strict"
//     console.log(this === globalThis); // true

//     function display() {
//         console.log(this === undefined); // true
//     }
//     display();
// }

// show();


/** THIS VALUE METHOD INVOCATION */
// let myOwnCar = function () {
//     console.log(this === globalThis)
// }

// let car = {
//     brand: 'Honda',
//     getBrand() {
//         return this.brand;
//     } ,
//     checkThis(){
//         console.log(this === globalThis)
//     },
//     checkThis2(){
//         console.log(this === car)
//     }
// }

// console.log(car.getBrand()); // Honda

// let carBrand = car.getBrand ;
// console.log('New car brand : ', carBrand())
// console.log('***This value for car object === globalThis ***')
// car.checkThis()
// console.log('***This value for car object === car ***')
// car.checkThis2()

// console.log("******.......******")
// myOwnCar()



/** THIS VALUE, CONSTRUCTOR INVOCATION */
function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

var car = new Car('Honda');
console.log(car.getBrand());