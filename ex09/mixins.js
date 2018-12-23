// 車
class Car {
    constructor() {}
}

// 洗う人
class Washer {
}

// 洗う
function wash(w) {
    w.addWasher = function(p) { this.washer = p; }
    w.getWasher = function() { return this.washer; }
    w.hasWashed = function() { return !!this.washer; }
}

/** ミックスイン適用 */
wash(Car.prototype);

/** 車を生成して確認 */
const car = new Car();
car.addWasher("洗う人");
console.log(car.getWasher());