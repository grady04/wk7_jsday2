//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// recursion to try and get into the dictionary
const iterate = (foods) => {
    Object.keys(foods).forEach(key => {
        if (typeof foods[key] === 'object' && foods[key] !== null) {
            iterate(foods[key])
        } else {
            console.log(`My favorite ${key} is ${foods[key]}`)
        }  
    })
}
iterate(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo(){
        return `This is ${this.name} and they are ${this.age} years old`
    }

    growingOld(){
        this.newAge = this.age++;
        return `${this.name} is now ${this.newAge} years old!`
    }
}

let fred = new Person("Fred", 17)
let daphne = new Person("Daphne", 17)
console.log(fred.printInfo())
console.log(daphne.printInfo())
console.log(fred.growingOld())
console.log(fred.growingOld())
console.log(fred.growingOld())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function longString(str){
    return new Promise((resolve, reject) => {
        if (str.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    })}

function determineString(str){
    longString(str).then(
        (result)=>{
            console.log('Big Word')
        }  
    ).catch(
        (error)=>{
            console.log('Small Word')
        }
    )

}

determineString('pterodactyl')