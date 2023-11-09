// assignment 32

var current_users = ['John', 'Alice', 'Bob', 'Eve', 'Mallory'];

var new_users = ['Eric', 'Eve', 'Carol', 'Frank', 'MALLORY'];


for (let i = 0; i < new_users.length; i++) {
  
  const newUser = new_users[i].toLowerCase(); 
  const isUsernameTaken = current_users.some(user => user.toLowerCase() === newUser);

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please choose a different one.`);
  } else {
    console.log(`Username '${new_users[i]}' is available.`);
  }
}
