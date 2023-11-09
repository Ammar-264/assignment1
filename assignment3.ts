// assignment 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var newName = 'ammar farooq';

var nameSplit = newName.split(' ');

for(var i=0 ; i<nameSplit.length ; i++){
   nameSplit[i] = nameSplit[i][0].toLocaleUpperCase() +  nameSplit[i].slice(1)
}

var titleCase = nameSplit.join(' ');

console.log('lower case : ' + newName.toLowerCase());
console.log('upper case : ' + newName.toUpperCase());
console.log('Title case : ' + titleCase);

