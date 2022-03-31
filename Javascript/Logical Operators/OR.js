//Logical Operator OR is written with two pipe characters ||
//ONLY ONE side needs to be true

1 !== 1 || 10 === 10; //true
10 / 2 === 5 || null; //true
0 || undefined; //false

//0-5 free
//5-10 $10
//10-65 $20
//65+ free

const age = 90;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("Free")
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("20")
} else {
    console.log("Invalid Age")
}