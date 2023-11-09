function make_sandwich(...items) {

    console.log("Making a sandwich with the following items:");

    for (var i = 0; i < items.length; i++) {
      console.log(`- ${items[i]}`);
    }
    console.log("Sandwich is ready!\n");
  }
  
  make_sandwich('Bread', 'Ketchup', 'egg', 'Tomato');
  make_sandwich('Bread', 'Mayo', 'Tomato');
  make_sandwich('Bread', 'Cheese', 'Sausage', 'egg', 'Pickles');