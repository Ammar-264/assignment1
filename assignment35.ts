var animals = ['Dog', 'Cat', 'Rabbit'];

console.log("List of animals:");
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");