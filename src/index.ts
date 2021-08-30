import { runInThisContext } from "vm";

const name = "Jongseong",
    age = 30,
    gender = "male";

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lyn = new Human("Lyn", 18, "female")
const sayHi = (person: Human) : string => {
    console.log(`Hello ${person.name}, you are age ${person.age} and ${person.gender}`)
    return `Hello ${person.name}, you are age ${person.age} and ${person.gender}` 
}

sayHi(lyn)
export{};