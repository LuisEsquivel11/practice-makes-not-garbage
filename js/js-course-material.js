"use strict"
// =========================== Objects ==================================


const bar = 'MidnightSwim'
const cafe = 'Starbucks'
const restaurant = 'Chopsticks'
const favPlaces = {     // ES6 shorthand to add keys to object
    bar,
    cafe,
    restaurant
}
console.log(favPlaces);

const color = 'black'
const hexCode = '#000'

const colors = {
    'yellow Color': '#ff0',
    blue: '#f00',
    orange: '#f60',
    [color]: hexCode
};
colors[color] = hexCode
console.log(colors)

function getColor(key) {
    return colors[key];
}

delete colors['yellow Color'] // delete operator
console.log(colors)
console.log(getColor('orange'));


//============================== Destructuring Objects
const SomeUser = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
        title: "Programmer"
    }
};

const {username, email} = SomeUser  // Making keys global variables
function displaySomeUser() {
    console.log(`username: ${username}, email: ${email}`)
}

displaySomeUser()

 const { name } = SomeUser  // if you only need one key from the obj
function displaySomeUserBio() {
    console.log(name)
}
displaySomeUserBio(SomeUser)

// const {title} = SomeUser.details // to access a value from a nested abject
//or
// const { name, details: {title} } = SomeUser

//You can also destructure inside the parameter for a function for more efficient code
// function displaySomeUserBio({name, details: {title} }) {
//     console.log(`${name} is a ${title}`);
// }

// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).


const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: {
        traditional: 'Fiddler\'s Elbow',
        jazz: 'The Paris House'
    }
}
// 1. Destructure the places to drink (coffee and beer) from recommendations
const {coffee, beer} = recommendations
// 2. Destructure the places to listen to music
const {music: {traditional, jazz } } = recommendations
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument
function musicPlaces({music: {traditional, jazz} } ) {
    console.log(`${traditional}, ${jazz}`)
}
musicPlaces(recommendations);

// =======================   Merge objects with object spreads

const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""
};

const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"
};

// Object.assign(user, newUser); // Merge objects using Object.assign(thisOne, getsPropertiesFromThisOne)
// The original obj reference will be mutated, to avoid that use this vv

console.log(Object.assign({}, user, newUser));






