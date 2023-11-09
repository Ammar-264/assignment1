function createCar(manufacturer, model, ...options) {
    var car = {
      manufacturer: manufacturer,
      model: model,
    };
  
    for (var i = 0; i < options.length; i += 2) {
        for (var j=0 ; j< Object.keys(options[i]).length ; j++){

            var keys = Object.keys(options[i])
            var values = Object.values(options[i])
            var key = keys[j];
            var value = values[j];

            car[key] = value;

        }
    }
  
    return car;
  }

var car1 = createCar('honda' , '2019' , {color:'blue' , transmition:'automatic'})
var car2 = createCar('toyota' , '2011' )

console.log(car1);
console.log(car2);
