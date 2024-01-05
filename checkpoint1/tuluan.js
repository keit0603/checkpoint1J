// câu9
let m = [1,2,3,4,5,6,"hh", "9",80,100];
let newM = m.filter((item) => typeof item === "number")


let mSquared = newM.map((item) => Math.pow(item,2))

console.log("newM: ", newM);

// câu 10
let string = "High knowledge, high return";

let array = string.split(" ");

let barray = array.filter((item) => item !== "");

let carray = barray.map((item) => item.toLowerCase());
console.log("carray: ", carray);

// câu 11
class people {
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    set(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    get(){
        return{
            name:this.name,
            age:this.age,
            address:this.address,
        }
    }
}
class student extends people{
    constructor(name,age,address,id,math,physical,chemistry){
        super(name,age,address);
        this.id=id;
        this.math=math;
        this.physical=physical;
        this.chemistry=chemistry;
    }
    GPA(){
        return(this.math+this.physical+this.chemistry)/3
    }
}


