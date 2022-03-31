//The Logical Operator NOT is written with an ! exclamation mark
// ! expression returns true if expression is false

!null; //true
!(0 === 0); //false
!(3 <= 4); //false

const firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("Try again!")
}

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior!")
}