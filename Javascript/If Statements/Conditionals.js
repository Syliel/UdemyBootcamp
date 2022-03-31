//if statement; only runs code if given condition is true

// let rating = 3;
// if (rating === 3) {
//     console.log("You are a superstar!!");
// }

// console.log("Before Conditional");
// if (1 + 1 === 2) {
//     console.log("Math still works");
// }
// console.log("After Conditional");

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!!")
} else {
    console.log("Your number is greather than 0.5!!")
}
console.log(random);

// const dayOfWeek = prompt("Enter a day!").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Ugh, I hate Mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay! I love Saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work!");
// } else {
//     console.log("Meh");
// }


// const age = 8;

// if (age < 5) {
//     console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else if (age > 65) {
//     console.log("You are a senior. You pay $10");
// }

Nesting!!!!!!!!!!!




const password = prompt("please enter a new password");
// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password too short. Must be at least 6 characters!");
}
// Password cannot include space
if (password.indexOf(' ') === -1) {
    console.log("Good job! No space!");
} else {
    console.log("Password cannot contain spaces!");
}