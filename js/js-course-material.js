"use strict"
// =========================== Objects ==================================


// const bar = 'MidnightSwim'
// const cafe = 'Starbucks'
// const restaurant = 'Chopsticks'
// const favPlaces = {     // ES6 shorthand to add keys to object
//     bar,
//     cafe,
//     restaurant
// }
// console.log(favPlaces);
//
// const color = 'black'
// const hexCode = '#000'
//
// const colors = {
//     'yellow Color': '#ff0',
//     blue: '#f00',
//     orange: '#f60',
//     [color]: hexCode
// };
// colors[color] = hexCode
// console.log(colors)
//
// function getColor(key) {
//     return colors[key];
// }
//
// delete colors['yellow Color'] // delete operator
// console.log(colors)
// console.log(getColor('orange'));
//
//
// //============================== Destructuring Objects
// const SomeUser = {
//     name: "Reed",
//     username: "Reedbarger",
//     email: "reed@gmail.com",
//     details: {
//         title: "Programmer"
//     }
// };
//
// const {username, email} = SomeUser  // Making keys global variables
// function displaySomeUser() {
//     console.log(`username: ${username}, email: ${email}`)
// }
//
// displaySomeUser()
//
//  const { name } = SomeUser  // if you only need one key from the obj
// function displaySomeUserBio() {
//     console.log(name)
// }
// displaySomeUserBio(SomeUser)

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
// const {coffee, beer} = recommendations
// 2. Destructure the places to listen to music
// const {music: {traditional, jazz } } = recommendations
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument
// function musicPlaces({music: {traditional, jazz} } ) {
//     console.log(`${traditional}, ${jazz}`)
// }
// musicPlaces(recommendations);

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

// console.log(Object.assign({}, user, newUser));


// callbacks -> promises

//States of a promise:
//pending
//fulfilled
//rejected

    // reject a promise...
   // const promise = new Promise((resolve, reject) => {
   //      setTimeout(() => reject(Error('Promise failed.')), 1000)
   //  });
   // promise.then(() => console.log('success')).catch(error => console.error(error)).finally(() => console.log('done'))

    // API - Application Programming Interface: software to communicate wtih other software
    //REST API
    // CRUD create read update delete
    // JSON - JavaScript Object Notion
    // fetch(url)  // the movie db

const blogPost = {

}
fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => {
       if (!response.ok) {
           throw new Error(response.status);
       }

})
// 'GET' method
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json();
//     })
//     .then(person => {
//         console.log(person.name)
//     })
//     .catch(err => console.log(err));


// 'POST' method
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data =  await response.json()
    console.log(data)

}
getPost()



// Async and await with created promise
//   async function getBlogPost() {
//    const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('blog post'), 1000)
//     });
//     const result = await promise;
//     console.log(result)
//       console.log('done')
//         // .then(value => console.log(value))
//         // .finally(() => console.log('done'))
// }
//
// getBlogPost()

// try and catch
// async function runAsync() {
//     try {
//     await Promise.reject(Error('oops'));
//     } catch (error) {
//         console.error(error)
//     }
//
// }
// runAsync()

// using fetch and catching an error
// async function getGithubUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//     } catch (error) {
//         console.log('Could not fetch user, try resetting your connection');
//         console.error(error);
//     }
// }
// getGithubUser();


async function getBlog() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch (error) {
            console.error(error)
        }
    }

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if (!response.ok) {
            throw new Error(response.status);
        }
        const person = await response.json();
        console.log(person)
    }
    catch (error) {
        console.log(error)
    }

}
getUser()








