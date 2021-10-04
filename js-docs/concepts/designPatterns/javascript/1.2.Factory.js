// ✅ 1.2 팩토리 패턴
// UIElementFactory가 있다고 상상해보자
// button 줘 , Panel 줘 , 등등 인스턴스화 까지 해서 주면 얼마나 좋을까
// 특히) 객체를 생성이 복잡한 경우에 유용하다.// Types.js - Constructors used behind the scenes

// ✅ example) 자동차 팩토리

// 자동차 만드는 생성자 함수
function Car(options) {
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

// 트럭을 만드는 생성자 함수, IIFE 형태
const Truck = (function () {
  function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }
  return Truck;
})();

// FactoryExample.js

const VehicleFactory = (function () {
  // 팩토리 생성자 매서드, 뼈대 만들기
  function VehicleFactory() {}
  // 기본 리턴 타입은 Car 이다.
  VehicleFactory.prototype.vehicleClass = Car;
  // createVehicle는 type에 맞는 생성자 함수를 고른다.
  VehicleFactory.prototype.createVehicle = function (options) {
    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
      //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }
    return new this.vehicleClass(options);
  };
  return VehicleFactory;
})();

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6,
});

// Test to confirm our car was created using the vehicleClass/prototype Car
// Outputs: true
console.log(car instanceof Car);
// Outputs: Car { doors: 6, state: 'brand new', color: 'yellow' }
console.log(car);

// ✅ Approach #1: Modify a VehicleFactory instance to use the Truck class
// - 트럭생성하기
var movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small",
});

// Test to confirm our truck was created with the vehicleClass/prototype Truck

// Outputs: true
console.log(movingTruck instanceof Truck);

// Outputs: Truck object of color "red", a "like new" state
// and a "small" wheelSize
console.log(movingTruck);

// ✅ Approach #2: Subclass VehicleFactory to create a factory class that builds Trucks
// - 트럭생성을 기본값으로 하는 팩토리 상속하기

function TruckFactory() {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
  state: "omg..so bad.",
  color: "pink",
  wheelSize: "so big",
});

// Confirms that myBigTruck was created with the prototype Truck
// Outputs: true
console.log(myBigTruck instanceof Truck);

// Outputs: Truck object with the color "pink", wheelSize "so big"
// and state "omg. so bad"
console.log(myBigTruck);
