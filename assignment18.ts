// assignment 18

var favPlaces = ['maldives' , 'saudia' , 'uae' , 'bahrain']

console.log( favPlaces)

var sortedList = [...favPlaces]
console.log( sortedList.sort())

console.log( favPlaces)

const reversedFavPlaces = [...favPlaces];
console.log(reversedFavPlaces.reverse())

console.log( favPlaces)

favPlaces.reverse()
console.log( favPlaces)

favPlaces.reverse()
console.log( favPlaces)

favPlaces.sort()
console.log( favPlaces)

favPlaces.sort((a, b) => b.localeCompare(a));
console.log( favPlaces)