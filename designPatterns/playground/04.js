// Car constructor
const Car = (function () {
  const Car = function (option) {
    this.name = option.name || "Car";
    this.door = option.door || 4;
  };
  return Car;
})();

// Truck constructor
const Truck = (function () {
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

const VehicleFactory = (function () {
  function VehicleFactory() {}
  VehicleFactory.prototype.vehicleClass = Car; // ✅ 프로토타입객체안에 있고 변하지 않는다.
  VehicleFactory.prototype.createVehicle = function (option) {
    switch (option.type) {
      case "Car":
        this.vehicleClass = Car; //✅ this키워드를 쓴 순간, 인스턴스의 vehicleClass이 변한다.
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
const vehicleFactory1 = new VehicleFactory();
const vehicleFactory2 = new VehicleFactory();

const car1 = vehicleFactory1.createVehicle({ type: "Truck", door: 2 });
const car2 = vehicleFactory2.createVehicle({ type: "Car", door: 2 });

console.log(vehicleFactory1 === vehicleFactory2); // false
console.log(vehicleFactory1.vehicleClass); // [Function: Truck]
console.log(vehicleFactory2.vehicleClass); // [Function: Car]
//✅ 프로토타입 체인은 new할때마다 만들어지는 건가?!
// - 왜 함수는 공유해서 this를 사용해서 맴버변수를갈아끼우는데
// - 프로토타입의.변수는 어떻게 다르게 공유가 되는거지?

// TruckFactory extends VehicleFactory
// + vehicleClass = truck (override)
const TruckFactory = (function () {
  function TruckFactory() {}
  TruckFactory.prototype = new VehicleFactory();
  TruckFactory.prototype.vehicleClass = Truck;
  return TruckFactory;
})();

const truckFactory = new TruckFactory();
const truck1 = truckFactory.createVehicle({});
console.log(truck1);
