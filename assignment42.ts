function make_great(magicians) {
    for (var k = 0; k < magicians.length; k++) {
      magicians[k] = magicians[k] + ' the Great';
    }
  }


function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  var magicianNames = ['magician 1', 'magician 2', 'magician 3', 'magician 4'];

  make_great(magicianNames)
  
  show_magicians(magicianNames);