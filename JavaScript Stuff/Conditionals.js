// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5");
//     console.log(random);
// }


// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("ugh, I hate Mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay, it's Saturday");
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially");
// } else {
//     console.log("Meh...");
// }

// 0 - 5  FREE 
// 5 - 10 Child $10
// 10 - 65 Adult $20
// 65+ Senior $10

// const age = 35;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10.");
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20.");
// } else {
//     console.log("You are a senior. You pay $10.");
// }

// Password must be 6+ characters
// Password cannot include space

const password = prompt('Please enter a new password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces");
    }
} else {
    console.log("Password too short. Must be 6 or more characters!");
}