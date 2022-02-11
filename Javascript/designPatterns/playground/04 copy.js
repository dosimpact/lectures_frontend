// Car varructor
var Car = (function () {
  var Car = function (option) {
    this.name = option.name || "Car";
    this.door = option.door || 4;
  };
  return Car;
})();

// Truck varructor
var Truck = (function () {
  function Truck(option) {
    this.name = option.name || "Truck";
    this.door = option.door || 12;
    this.wheel = option.wheel || 6;
  }
  return Truck;
})();

// VehicleFactory
// + vehicleClass
// ===
// + createVehicle

var VehicleFactory = (function () {
  function VehicleFactory() {}
  VehicleFactory.prototype.vehicleClass = Car;
  VehicleFactory.prototype.createVehicle = function (option) {
    switch (option.type) {
      case "Car":
        this.vehicleClass = Car;
        break;
      case "Truck":
        this.vehicleClass = Truck;
        break;
      //   default:
      //     break;
    }
    return new this.vehicleClass(option);
  };

  return VehicleFactory;
})();
var vehicleFactory1 = new VehicleFactory();
var vehicleFactory2 = new VehicleFactory();

var car1 = vehicleFactory1.createVehicle({ type: "Truck", door: 2 });
var car2 = vehicleFactory2.createVehicle({ type: "Car", door: 2 });

console.log(vehicleFactory1 === vehicleFactory2); // false
console.log(vehicleFactory1.vehicleClass); // [Function: Truck]
console.log(vehicleFactory2.vehicleClass); // [Function: Car]
//✅ 프로토타입 체인은 new할때마다 만들어지는 건가?!
// - 왜 함수는 공유해서 this를 사용해서 맴버변수를갈아끼우는데
// - 프로토타입의.변수는 어떻게 다르게 공유가 되는거지?

// TruckFactory extends VehicleFactory
// + vehicleClass = truck (override)
var TruckFactory = (function () {
  function TruckFactory() {}
  TruckFactory.prototype = new VehicleFactory();
  TruckFactory.prototype.vehicleClass = Truck;
  return TruckFactory;
})();

var truckFactory = new TruckFactory();
var truck1 = truckFactory.createVehicle({});
console.log(truck1);
