function make_great(magicians) {

    var greatMagicians = [];

    for (var k = 0; k < magicians.length; k++) {
        greatMagicians.push(magicians[k] + ' the Great');
    }

    return greatMagicians
  }


function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  var magicianNames = ['magician 1', 'magician 2', 'magician 3', 'magician 4'];


  var magicianNamesCopy = [...magicianNames];
  var greatMagicianNames = make_great(magicianNamesCopy);

  console.log("Original Magician Names:");
  show_magicians(magicianNames);

  console.log("\nGreat Magician Names:");
  show_magicians(greatMagicianNames);