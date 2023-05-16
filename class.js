"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_legs;
class Katzu {
}
const deshiKatzu = new Katzu();
deshiKatzu.legs = 4;
console.log(deshiKatzu);
class Employee {
    constructor(legsparam, handsparam, employeeName) {
        //employee k jodi object er sathe tulona kora jai then ei gula oi object er properties
        _Employee_legs.set(this, void 0); //private only class er modhei use hobe eta 
        //employee ke jodi object er sathe tulona kora hoi taile ei Employee object er  property gula ke reach korar jonno ei this.classProperty ta likha hoi
        this.hands = handsparam;
        __classPrivateFieldSet(this, _Employee_legs, legsparam, "f");
        this.name = employeeName;
        //ekhane class ta object hole oi object er property te baire theke asa value assign korar jonno constractor method er param evabe daoa hoi
    }
    //eta getter jehetu legs variable ta ekhane private kora to eta ke access korar jonno ei get value ta use kora hoi r ei get method ta private variable legs ke return kortese r evabe geter private value ke class er baire send kore thake 
    get getlegs() {
        return __classPrivateFieldGet(this, _Employee_legs, "f");
    }
    //r eta holo setter jehetu legs variable ta sudhu matro ei class er modheii thakbe privately so etar value class er baire theke ei setter idye evabe set kora jai 
    set setlegs(legslegs) {
        __classPrivateFieldSet(this, _Employee_legs, legslegs, "f");
    }
    getName(trig) {
        // method implementation
        return trig + this.name;
    }
    static staticClassMethod() {
        console.log("p");
    }
}
_Employee_legs = new WeakMap();
const e = new Employee(4, 2, "rafi");
const f = new Employee(1, 5, "sadik");
const g = new Employee(2, 3, "hasan");
// g.staticClassMethod() //eta possible na 
Employee.staticClassMethod(); // eta possible 
console.log(g.getName("md "));
