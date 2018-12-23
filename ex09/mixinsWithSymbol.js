// 車
class Car {
    constructor() {}
}

// 洗う人
class Washer {
}

// 洗う
const ADD_WASHER = Symbol();
const GET_WASHER = Symbol();
const HAS_WASHED = Symbol();
const _WASHER = Symbol();
function wash(w) {
    w[ADD_WASHER] = function(p) { this[_WASHER] = p; }
    w[GET_WASHER] = function() { return this[_WASHER]; }
    w[HAS_WASHED] = function() { return !!this[_WASHER]; }
}

/** ミックスイン適用 */
wash(Car.prototype);

/** 車を生成して確認 */
const car = new Car();
car[ADD_WASHER]("洗う人");
console.log(car[GET_WASHER]());