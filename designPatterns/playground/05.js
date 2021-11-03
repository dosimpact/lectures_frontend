class Vehicle {
  constructor(options) {
    this.name = options.name || "vehicle";
  }
}
class Car extends Vehicle {
  constructor(options) {
    super(options);
    this.name = "Car";
    this.color = options.color || "red";
  }
}
class Truck extends Vehicle {
  constructor(options) {
    super(options);
    this.name = "Truck";
    this.door = options.door || 4;
  }
}

class VehicleFactory {
  // +classType
  #classType = Car;
  constructor(options = {}) {}
  // ===
  // +createVehicle
  createVehicle(options) {
    switch (options.type) {
      case "Car":
        this.classType = Car;
        break;
      case "Truckt":
        this.classType = Truck;
        break;
      default:
        break;
    }
    return new this.classType(options);
  }
  getClassType() {
    return this.classType;
  }
}

class TuckFactory extends VehicleFactory {
  constructor(options = {}) {
    super();
    // super({ ...options, classType: Truck });
    // this.vehicleClass = Truck; // 부모 변수까지 가지 않는다.
    // 자식의 vehicleClass 이 변경된것은 맞다.
    // super.vehicleClass = Truck; //
  }
}

const vehicleFactory = new VehicleFactory();
const car1 = vehicleFactory.createVehicle({ type: "Car", color: "yellow" });
console.log(car1);

const tuckFactory = new TuckFactory();
const truck1 = tuckFactory.createVehicle({});
console.log(tuckFactory.vehicleClass);
console.log(truck1);
console.dir(tuckFactory);
