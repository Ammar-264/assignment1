// assignment 16
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

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

    if(guestList[i] == 'aziz'){
        guestList.splice(i , 1 , 'arslan')
    }
    console.log(`Hello, ${guestList[i]} you are invited for dinner tomorrow`)
}