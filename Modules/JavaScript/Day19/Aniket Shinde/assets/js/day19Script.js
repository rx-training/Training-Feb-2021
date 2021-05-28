//Function expression
var areaCircle = function(r){
    if(r.value == "" || isNaN(r.value))
        document.getElementById("errormsg1").style.display = "block";
    else{
        document.getElementById("circlearea").innerHTML = "Area of Circle is : "+ (3.14 * r.value * r.value);
        document.getElementById("circlearea").style.display = "block";
        document.getElementById("errormsg1").style.display = "none";
    }
};

//Function Constructor
var areaRect = new Function("width","length", "return width * length");

function rectArea(length, width){
    var area = areaRect(length.value, width.value);
    if(length.value == "" || isNaN(length.value))
        document.getElementById("errormsg2").style.display = "block";
    if(width.value == "" || isNaN(width.value))
        document.getElementById("errormsg3").style.display = "block";
    else{
        document.getElementById("rectarea").innerHTML = "Area of Rectangle is : "+ area;
        document.getElementById("rectarea").style.display = "block";
        document.getElementById("errormsg2").style.display = "none";
        document.getElementById("errormsg3").style.display = "none";
    }
}

//Function Hoisting
function checkHoisting(){
    //Declaring Function
    function myFunction(){
        document.getElementById("hoisting1").innerHTML = "Example 1 : Hello World!";
    }
    //calling function
    myFunction();

    //calling function
    myFunction2();
    //Declaring Function
    function myFunction2(){
        document.getElementById("hoisting2").innerHTML = "Example 2 : Hello World!";
    }
    
}

//Create Employee object using function
var Employee = function(name, address, designation){
    this.name = name;
    this.address = address;
    this.designation = designation;
    this.fullDetails = function(city, county){
       return "Employee Name : "+this.name +"<br>Employee Address : "+ this.address+", "+ city +", "+ county +"<br>Employee Designation : "+ this.designation;
    };
}
function createEmployee(){
    var emp = new Employee("Aniket","Godhavi","developer");
    //console.log(emp.fullDetails.call(emp));
    var empDetails = emp.fullDetails.call(emp);
    document.getElementById("empobj").innerHTML = empDetails;
}

//Using Function Apply pass employee object to a function
function createEmployeeApply(){
    var emp = new Employee("Aniket","Godhavi","developer");
    //console.log(emp.fullDetails.call(emp, ["Ahmedabad", "India"]));
    var empDetails = emp.fullDetails.apply(emp,["Ahmedabad", "India"]);
    document.getElementById("empobj2").innerHTML = empDetails;
}

//Closure
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();
  
console.log(add());