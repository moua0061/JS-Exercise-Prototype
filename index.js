/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood){
  if (this.stomach.length < 10 ){
    this.stomach.push(someFood);
  }
}

Person.prototype.poop = function (){
  this.stomach = [];
}

Person.prototype.toString = function (){
  return `${this.name}, ${this.age}.`;
}

// let neo2 = new Person('Neo', 20);
// console.log(neo2);
// neo2.eat(5);
// console.log(neo2);
// neo2.eat(6);
// console.log(neo2);
// neo2.poop();
// console.log(neo2);
// neo2.eat(7);
// neo2.eat(8);
// neo2.eat(9);
// neo2.eat(10);
// neo2.eat(11);
// neo2.eat(12);
// neo2.eat(13);
// neo2.eat(53);
// neo2.eat(52);
// neo2.eat(51);
// neo2.eat(59);
// console.log(neo2);
// neo2.poop();
// console.log(neo2);
// console.log(neo2.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons){
  this.tank = gallons + this.tank 
}

let batmobile = new Car('BatMobile', 20);
console.log(batmobile);
let corolla = new Car('Toyota', 25);
// console.log(corolla);
// corolla.odometer = 1986;
// console.log(corolla);
// corolla.engine = 'V6';
// console.log(corolla);
// console.log(corolla.engine);
batmobile.fill(55);
console.log(batmobile);
batmobile.fill(19);
console.log(batmobile);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.favoriteToy = favoriteToy;
  Person.call(this, name, age);
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

let baby = new Baby ('redd', '2 months', 'wonder woman');
console.log(baby);
console.log(baby.play()); // if i want it to pass, i have to remove 'this' in the string ${}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window/global bind: it will show everything in your browser window in the global scope
  2. implict binding: that thing immediate to the left (baby.play) of the dot gets 'this'
  3. new binding: the keyword 'this' refers to the specific instance of the object that is created and returned by the
  constructor function whenever we use a constructor function.
  4. explicit binding: keyworkd 'this' is defiend when using .call, .apply or .bind 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}