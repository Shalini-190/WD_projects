const person = {
    firstName:"John",
    lastName:"Doe",
    age:30,
    occupation:"Engineer",
    sayHello: function(){
        console.log(`Hello,my name is ${this.firstName} ${this.lastName}.I am ${this.age} years old.`);
    },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
person.sayHello();