//declare var as anonymous function
var hireEmp = function(name){
    console.log(name);
};
console.log(typeof hireEmp);

//call anonymous function
hireEmp("Aniket");

//create object using function
var Employee = function(name, designation){
    this.name = name;
    this.designation = designation;
    this.salary = 50000;
}
var emp1 = new Employee("Aniket", "Web Developer");
var emp2 = new Employee("Jone", "Front-end Developer");
console.log(typeof emp1);
console.log(typeof Employee);
console.log(emp1.name);
console.log(emp1.designation);

console.log("comparing two objects",emp1 === emp2);
console.log("comparing two objects prototype", emp1.__proto__ === emp2.__proto__);

//Constructor function in prototype
Employee.prototype.giveRaise = function(raise){
    this.salary += raise;
};
console.log("Checking the prototypes of multiple objects of same class",emp1.giveRaise === emp2.giveRaise);
emp1.giveRaise(50000);
console.log(emp1.salary);
console.log(emp2.salary);

//this object
console.log("\"this\" is window object : ", this === window);
var name = "Shinde";
console.log(this.name);

var Address = function(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
};
Address.prototype.fullAddress = function(){
    console.log(this);
};
var add1 = new Address("sitaram darshan", "Ahmedabad", "India");
add1.fullAddress();

//closure
var salaryUpdater = function(salary){
    var currentSalary = salary;
    var generator = function(){
        currentSalary += 10000;
        return currentSalary;
    }
    return generator;
};
var update = salaryUpdater(50000);
update();
console.log(update());