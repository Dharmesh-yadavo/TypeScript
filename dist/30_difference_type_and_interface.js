"use strict";
// difference b/w  type & interface
// 1.
//use custom types when you need union, intersection, or mapped types.
//use interfaces when defining objects shapes or classes that  adhere to a contract.
Object.defineProperty(exports, "__esModule", { value: true });
const studentInfo = {
    name: "Raza",
    age: 23,
    city: "gojra",
    country: "pakistan",
};
const studentInfo1 = {
    name: "Raza",
    age: 23,
    city: "gojra",
    country: "pakistan",
};
// if we want access interface in class we use implements
class StudentInfo2 {
    name;
    age;
    city;
    country;
    constructor(name, age, city, country) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
    }
}
const info = new StudentInfo2("Raza", 23, "gojra", "pakistan");
