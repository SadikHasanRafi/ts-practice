class Katzu{
    legs!:number;
}

const deshiKatzu = new Katzu()

deshiKatzu.legs = 4

console.log(deshiKatzu)


class Employee{
    //employee k jodi object er sathe tulona kora jai then ei gula oi object er properties
    #legs:number//private only class er modhei use hobe eta 
    private hands:number//private emneo banano jai 
    name:string

    constructor(legsparam:number,handsparam:number,employeeName:string){ //oi j employee object e j parameter pathaitisi ekhane oi gula asbe parameter hoye

        //employee ke jodi object er sathe tulona kora hoi taile ei Employee object er  property gula ke reach korar jonno ei this.classProperty ta likha hoi
        this.hands = handsparam
        this.#legs = legsparam
        this.name = employeeName
        //ekhane class ta object hole oi object er property te baire theke asa value assign korar jonno constractor method er param evabe daoa hoi
      
        }  
//eta getter jehetu legs variable ta ekhane private kora to eta ke access korar jonno ei get value ta use kora hoi r ei get method ta private variable legs ke return kortese r evabe geter private value ke class er baire send kore thake 
        get getlegs():number{
            return this.#legs
        }

//r eta holo setter jehetu legs variable ta sudhu matro ei class er modheii thakbe privately so etar value class er baire theke ei setter idye evabe set kora jai 
        set setlegs(legslegs:number){
            this.#legs = legslegs
        }

        getName(trig?: any):string {
            // method implementation
            return trig+this.name
          }

          static staticClassMethod(){//ei static daoa class ta sudhu matro class er name diyeiii acess kora jai emni class er kono instance diye access kora jai na 
            console.log("p")
          }
        

}

const e = new Employee(4,2,"rafi")
const f = new Employee(1,5,"sadik")
const g = new Employee(2,3,"hasan")

// g.staticClassMethod() //eta possible na 
Employee.staticClassMethod()// eta possible 

console.log(g.getName("md "))