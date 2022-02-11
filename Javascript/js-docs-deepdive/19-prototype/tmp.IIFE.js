function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

const Truck = (function () {
  function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }
  return Truck;
})();

const VehicleFactory = (function () {
  // 1. 생성자 함수 (public)
  function VehicleFactory() {}
  // 2.1 프로토 타입 -  맴버변수 (public)
  VehicleFactory.prototype.vehicleClass = Car;
  // 2.2 프로토 타입 -  매서드 (public)
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
  // 3.2 정적 매서드 (public)
  VehicleFactory.getInfo = function () {
    console.log("VehicleFactory static method~");
  };
  // 3.1 정적 맴버변수 ?! (public)
  VehicleFactory.author = "Dosimpact";

  return VehicleFactory;
})();

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6,
});

// static property
VehicleFactory.getInfo();
console.log(VehicleFactory.author);

// console.log(car instanceof Car);
// console.log(car);
