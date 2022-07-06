var a = 6;
var b = 3;

console.log(`The difference between ${a} and ${b} is ${a-b}`);

var name1 = 'Andrew';
var name2 = 'Caleb';

console.log(`The name ${name1} is longer than ${name1} by ${name1.length - name2.length}`);

var word = prompt("Please enter a word or sentence");

if(word == word.toUpperCase()) {
    console.log("You are screaming!");
} 
else if(word == word.toLowerCase()){
    console.log("You are whispering?");
}
else {
    console.log("You are talking normally.");
}

function add (a, b ) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

var num1 = prompt("Please enter a number");
var op = prompt("Please enter an operator");
var num2 = prompt("Please enter another number");

if(op == '/'){
    console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
    
} else if(op == '+'){
    console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
} else if(op == '-'){
    console.log(`${num1} _ ${num2} = ${subtract(num1, num2)}`);
} else if(op == '*'){
    console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
} else{
    console.log("Invalid number or operator");
}