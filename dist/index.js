"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Jongseong", age = 30, gender = "male";
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lyn = new Human("Lyn", 18, "female");
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are age ${person.age} and ${person.gender}`);
    return `Hello ${person.name}, you are age ${person.age} and ${person.gender}`;
};
sayHi(lyn);
//# sourceMappingURL=index.js.map