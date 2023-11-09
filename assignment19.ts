// assignment 17


var guestList =['aziz' , 'anas' , 'abdullah']

for(var i=0 ; i<guestList.length ; i++){
    console.log(`Hello, ${guestList[i]} you are invited for dinner tomorrow`)
}

console.log('\naziz is not coming\n')

for(var i=0 ; i<guestList.length ; i++){

    if(guestList[i] == 'aziz'){
        guestList.splice(i , 1 , 'arslan')
    }
    console.log(`Hello, ${guestList[i]} you are invited for dinner tomorrow`)
}

console.log('\nI have found a biggger table now so i am inviting more people\n')

guestList.unshift('ayub')
guestList.push('akhter')
guestList.splice(2,0,'ahmed')

for(var i=0 ; i<guestList.length ; i++){

    console.log(`Hello, ${guestList[i]} you are invited for dinner tomorrow`)
}


console.log('\nI can invite only two people for dinner\n')

while(guestList.length > 2){
    var removedGuest = guestList.pop()
    console.log(`${removedGuest} sorry, you are not invited for dinner.`);
}

for(var i=0 ; i<guestList.length ; i++){

   console.log(`${guestList[i]},  you are still invited for dinner tomorrow`)
    
}

console.log('\nNo of peaple i am inviting for dinner:', guestList.length);

guestList.pop();
guestList.pop();


console.log('\nempty guest list:', guestList);
