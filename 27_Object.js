let person = {
    name: "ravi",
    age: 30,
    gender: "Male",
    greet() {
        return `Hi ${this.name}`;
    },
    wish: function () {
        return `Good Morning! ${this.name}`;
    },
    address: {
        street: "KBC",
        city: "hyd",
        zip: "50032"
    }
}
console.log(person);
console.log("Access Person name through . notation:" + person.name);
console.log("Access Person name through [] notation:" + person["name"]);
console.log("Person age before modification:", person.age)
person.age = 31;
console.log("Person age after modification:", person.age)
console.log("add new property to Object");
person.email = "something@gamil.com";
console.log(person);
console.log("delete an existed property to Object");
delete person.age;
console.log(person);


console.log("Iterate all elements from Object");
for (key in person) {
    if (typeof person[key] === "function") {
        console.log(key + ": " + person[key]());
    } else {
        console.log(key + ": " + person[key]);
    }
}


console.log("Destructing object");

let { name, age } = person;
console.log(name);
console.log(age);
console.log(person);

console.log("Check if property existe in object");
console.log("age" in person);
console.log("name" in person);
console.log(person);

console.log(person.hasOwnProperty("name"));  // Output: true
console.log(person.hasOwnProperty("gender"));  // Output: false





let employee = new Object();
employee.name = "Ravi";
employee.age = 25;
employee.dep = "HR";
employee.gender = "Male";
console.log(employee);
