"use strict";
//in typescript almost always after colon (:)  the type or if that is object or array then the interface needs to be declared
//function declaration 
// syntax
/*
function functionName (parameter:parameterType) : returnType {
    if there is a return type then we have to return something of that type or it will cause error
    else it will act as void (non return types) function
}
*/
//example of normal function
function addNumber(num1, num2) {
    return num1 + num2;
}
//example of arrow function 
const multiplyNumber = (num1, num2) => { return num1 * num2; };
// without parameter function 
const multiplyNumber1 = () => {
    let num1 = 2, num2 = 3;
    return num1 * num2;
};
//example of required parameter or optional parameter function 
function subtractNumber(num1, num2, num3 = 10) {
    return num1 - num2 - num3;
}
//calling the subtractNumber function
const sub = subtractNumber(1, 2, 3);
const sub2 = subtractNumber(1, 2);
//normal variable declaration 
//syntax
/*
useDataTypeKeyWorkLikeLetConst variableName: dataTypeLikeNumberString = "value"
*/
//example
let firstName = "Dylan";
const num = 20;
var mew; //this will act as any means any type of data can be stored here which is safer that the any
mew = 1;
mew = "watashi no wa katzu";
let x = true;
let y = undefined;
let z = null;
//array declaration syntax
//syntax
/*
dataTypeKeywordLikeLetConst arrayName: dataTypeLikeNumberString[] = [arrayElement0,arrayElement1]
*/
// example
let array = [1, 2, 3, 4];
let names = ["Alice", "Bob", "Charlie"];
let flags = [true, false, true];
let cat = ["katzu", 2, 3];
let wow; //declare first then use it later can be possible like this  
const graph = [55.2, 41.3];
//array here can be declare like this 
let numbers = [1, 2, 3, 4, 5];
//object declaration
//syntax
/*

dataType objectName: {property1:datatype , property2:datatype} = {
        property1:value,
        property2:value
}

*/
//example 
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// accessing the object Element
console.log(car.year);
//if the property type is not defined in the second bracket then it will throw error however if there is an optional chaining then it will not throw any types of error
const neko = {
    legs: 4
};
neko.form = "liquid";
console.log(neko);
//output --> { legs: 4, form: 'liquid' }
//defining empty object with key pair value
const nameAge = {};
//enums
//syntax
/*
enum nameOfEnumVariable {
    property1 = value,
    property2 = value2
}
*/
// example
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
