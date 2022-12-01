//

// 1 - OBJECT DESTRUCTURING

//  8

// 1846

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// 2 - OBJECT DESTRUCTURING

//

// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?

// 3 - OBJECT DESTRUCTURING

//

// Your name is Alejandro, and you like purple

// Your name is Melissa, and you like green

// Your name is undefined and you like green

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }

//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?
  
// 1 - ARRAY DESTRUCTURING

//

// 'Maya'

// 'Marisa'

// 'Chi'

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// 2 - ARRAY DESTRUCTURING

// 'Raindrops on Roses'

// 'whiskers on kittens'

// ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?

// 3 - ARAY DESTRUCTURING

//

// [10 ,30, 20]

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?

// Dont forget to count starting at zero

// ES2015 Refactoring

// ES5 Assinging Variables to Object Properties

var obj = {
    numbers: {
        a:1,
        b:2,
    }
}

var a = obj.numbers.a;

var b = obj.numbers.b;

//ES2015 Object Destructuring

const {numbers: {a : A , b : B} } = obj;

// Assigned new variables as opposed to commenting out the old code or overwriting the vars.

// ES5 Array Swap

var arr = [1,2];

var temp = arr [0];

arr[0] = arr[1];

arr[1] = temp;

// // ES2015 Array Swap

[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults()

let raceResults = (([first, second, third, ...rest]) => {return {first,second,third,rest}});

const answer = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// /*
//   {
//     first: "Tom",
//     second: "Margaret",
//     third: "Allison",
//     rest: ["David", "Pierre"]
//   }
// */

