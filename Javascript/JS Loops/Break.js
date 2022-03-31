//The break keyword is most often used with while loops, but can be used with any

let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    guess = Math.floor(Math.random() * 10);
    if (guess === targetNum) {
        console.log(`Correct! Guessed: ${guess} & target was: ${targetNum}`);
        break
    }
    else {
        console.log(`Guessed ${guess}... Incorrect!`);
    }
}

let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("Ok, you win!")