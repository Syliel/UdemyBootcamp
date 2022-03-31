// All JS values have an inherent truthyness or falsyness about them. 

// Falsy Values: 
//     False 
//     0
//     "" (empty string)
//     null
//     undefined
//     NaN

// Everything else is truthy!!!

const userInput = prompt("Enter something");

if (userInput) {
    console.log("Truthy!!")
} else {
    console.log("Falsy!!")
}

if (0) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}
