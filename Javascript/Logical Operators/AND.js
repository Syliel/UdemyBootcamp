//Logical Operator AND is written using two apersands &&
// Both sides must be true, for the entire thing to be true

1 <= 4 && 'a' === 'a'; //true
9 > 10 && 9 >= 9; //false
'abc'.length === 3 && 1 + 1 === 4; //false


const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Passord")
} else {
    console.log("Invalid Password")
}