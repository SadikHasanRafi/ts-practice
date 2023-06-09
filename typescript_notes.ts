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
function addNumber (num1:number,num2:number): number {
    return num1+num2
}

//example of arrow function 
const multiplyNumber = ( num1:number, num2:number) : number =>{ return num1*num2 }
// without parameter function 
const multiplyNumber1 = ( ) : number =>{ 
        let num1:number=2, num2:number=3
        return num1*num2 
    }

//example of required parameter or optional parameter function 
function subtractNumber (num1:number,num2:number, num3 = 10 ): number {
    return num1-num2-num3;
}
//calling the subtractNumber function
const sub = subtractNumber(1,2,3);
const sub2 = subtractNumber(1,2);

//rest parameter or infinite number of parameter
function add2(num1:number, num2:number, ...num3:number[]):number{  //here num3 is using spread operator and this parameter is array type array size is not defined which means it can take infinite amount of input in array formate 
    return num1+num2+num3.reduce((a,b) => a+b ,0)
}

console.log(add2(2,3,...[1,2,3,9,4,5,6,7]))
console.log(add2(2,3,1,2,3,9,4,5,6,7))


//generic function
function getItem<Type>(item:Type[]):Type[]{ //ei Type keyword ta ekhane array er element wise change hobe jodi ekhane array er element gula number hoi then number hobe type gula r jodi string hoi element type then ekhane type string hobe 
    return new Array<Type>().concat(item);
}

let concatResult = getItem([1,2,3,4])
console.log(concatResult)

let concatString = getItem<string>(["mew","cow","neko","katzu"]); //ekhane j string likhsi er madhome chaile ekhane eta declear kora jai j ami ki type er return chaitisi
console.log(concatString)




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
