var city1 = 'Karachi';
var city2 = 'Islamabad';

console.log(`Are ${city1} and ${city2} equal? I predict False.`);
console.log(city1 === city2); 

// Lower Case Function
var text = 'Hello World';

console.log(`Is the ${text} in lowercase? I predict False.`);
console.log(text.toLowerCase() === text); 


var num1 = 5;
var num2 = 10;

console.log(`Is ${num1} not equal to ${num2}? I predict True.`);
console.log(num1 !== num2); 

console.log(`Is ${num2} greater than ${num1}? I predict True.`);
console.log(num2 > num1); 

console.log(`Is ${num1} less than or equal to ${num2}? I predict True.`);
console.log(num1 <= num2); 


var isSunny = true;
var isWarm = true;

console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); 

var isRaining = false;
var isCold = true;

console.log("Is it raining/cold? I predict True.");
console.log(isRaining || isCold); 

var items = ['car', 'bike', 'aeroplane', 'bus'];

var item = 'bus';

console.log(`Is ${item} in the ${items} list? I predict True.`);
console.log(items.includes(item)); 

var companies = ['honda', 'toyota', 'bmw', 'hyundai'];

var companyToCheck = 'mercedes';

console.log(`Is ${companyToCheck} not in the ${companies} list? I predict True.`);
console.log(!companies.includes(companyToCheck)); 
