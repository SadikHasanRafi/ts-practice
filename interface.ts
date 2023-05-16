interface user  {
    name:string
    age?:number
    id:number
}

interface bank extends user { //ekhane bank nijer property salary er pasapasi user er name age esob attribute access korte parbe
    salary:number
}

let user1:user = { name:"rafi",id:12}
let user2:user = { name:"sadik",id:12,age:23}
let taka:bank = {name:"hasan",age:123,id:1,salary:21397123781} // ekhane nijer property soho user er property gulao excess korte partese 

const auth: {name:string,id:number,uid:number}={
    name:"pq",id:123000,uid:321
}

let {id:destractureid} = auth

console.log(destractureid)