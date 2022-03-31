// Numbers:
1;
-99;
0.345345;

//Making variables with let:
let numberOfFriends = 1;

//Incrementing:
numberOfFriends += 3; //numberOfFriends is now 4

// Variables with const
const minimumAge = 21; //CANNOT REASSIGN!

//Booleans - true or false values
true;
false;
let isHappy = true;

//Naming Conventions
// Use upper camel-cased names:
let numberOfChickens = 6; //GOOD
// NOT THE JS WAY:
// let number_of_chickens = 6;

//R E P L ... Read, Evaluate, Print, Loop

//Addition
50 + 5 //55

//Subtraction
90 - 1 //89

//Multiplication
11111 * 7 //77777

//Division
400 / 25 //16

//Modulo!!
27 % 2 //1

//A const (constant) variable is the same as let, except that you CANNOT CHANGE IT. 

//Methods
let msg = 'I am king';
undefined
let yellMsg = msg.toUpperCase();
undefined
let angry = 'LeAvE mE aLoNe!';
undefined
angry.toLowerCase();
"leave me alone!"
angry;
"LeAvE mE aLoNe!"
yellMsg
"I AM KING"
msg
"I am king"
let greeting = '    leave me alone plz    ';
undefined
greeting.trim()
"leave me alone plz"
greeting.trim().toUpperCase()
"LEAVE ME ALONE PLZ"

//Method Arguments
thing.method(arg)
//some methods accept arguments that modify their behavior. Think of them as inputs that we can pass in.
//We pass these arguments inside of the parentheses. 
//INDEXOF
let tvShow = 'catdog';
tvShow.indexOf('cat'); //0
tvShow.indexOf('dog'); //3
tvShow.indexOf('z'); //-1 (not found)
"haha that is so funny!".indexOf('h'); //0
"haha that is so funny!".indexOf('is'); //10

//SLICE
"haha that is so funny!".slice(5); //"that is so funny!"
let msg = "haha that is so funny!";
msg.slice(5, 9); //"that"
msg.slice(-6); //"funny!"

//REPLACE
let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha') // 'haha so funny! teehee!' //Notice that it only replaces the first instance

//REPEAT
"lol".repeat(2); //"lolol"

String Template Literals are Super Useful
//Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
//Uses a backtick, not a single quote
//without
"You bought " + qty + " " + product + ". Total is: " + price * qty
'You bought 5 Artichoke. Total is: 11.25'
    //with
    `You bought ${qty} ${product.toUpperCase()}s. Total is: $${price * qty}`;
"You bought 5 ARTICHOKEs. Total is: $11.25"

//MATH OBJECT
//Contains properties and methods for mathematical constants and functions
Math.PI; // 3.141592653589793
//rounding number
Math.round(4.9); //5
//absolute value
Math.abs(-456); //456
//raises 2 to the 5th power
Math.pow(2, 5); //32
//removes decimal
Math.floor(3.9999); //3
//round up always
Math.ceil(34.01); //35
//Random Numbers: Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
Math.random(); //0.14502435424141957
Math.random(); //0.5483958667154798
//are you fucking kidding me? 
Math.floor(Math.random() * 10) + 1;