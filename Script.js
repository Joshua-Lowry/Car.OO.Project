
//PART 1:
//__________________________________________________________

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
};

let myFirstCar = new Vehicle("Chevy", "Lumina", 1998);

// PART 2:
// ___________________________________________________________

class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

let myNewCar = new Car("Kia", "Sorento", 2021);

// PART 3:
// ___________________________________________________________

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
};



let myFirstMotorcycle = new Motorcycle('Harley-Davidson', 'Dyna Super Glide FXDC', 2012)

// PART 4:
// ___________________________________________________________

class garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
};

// ** CANT GET THE CONSOLE.LOGS TO SHOW IN PART 4 **

