//in typescript almost always after colon (:)  the type or if that is object or array then the interface needs to be declared



//function declaration 
// syntax
/*
function functionName (parameter:parameterType) : returnType {
    if there is a return type then we have to return something of that type or it will cause error 
    else it will act as void (non return types) function 
}
*/

//example
function addNumber (num1:number,num2:number): number {
    return num1+num2
}


//normal variable declaration 
//syntax
/*
useDataTypeKeyWorkLikeLetConst variableName: dataTypeLikeNumberString = "value"
*/

//example
let firstName: string = "Dylan";
const num:number = 20;
var mew:unknown; //this will act as any means any type of data can be stored here which is safer that the any
mew = 1;
mew = "watashi no wa katzu"
let x: boolean = true; 
let y: undefined = undefined;
let z: null = null;



//array declaration syntax
//syntax
/*
dataTypeKeywordLikeLetConst arrayName: dataTypeLikeNumberString[] = [arrayElement0,arrayElement1]
*/

// example
let array : number[] = [1,2,3,4]
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];
let cat: any [] = ["katzu",2,3]
let wow: string[] //declare first then use it later can be possible like this  
const graph: [x: number, y: number] = [55.2, 41.3];


//array here can be declare like this 
let numbers: Array<number> = [1, 2, 3, 4, 5];


//object declaration
//syntax
/*

dataType objectName: {property1:datatype , property2:datatype} = {
        property1:value,
        property2:value
}

*/

//example 
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

// accessing the object Element
console.log(car.year)

//if the property type is not defined in the second bracket then it will throw error however if there is an optional chaining then it will not throw any types of error
const neko: {legs:number, form?:string } ={
    legs:4
}
neko.form = "liquid"

console.log(neko)
//output --> { legs: 4, form: 'liquid' }

//defining empty object with key pair value
const nameAge : { [index:string] : number } ={}



//enums

//syntax
/*
enum nameOfEnumVariable {
    property1 = value,
    property2 = value2
}
*/

// example
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);
