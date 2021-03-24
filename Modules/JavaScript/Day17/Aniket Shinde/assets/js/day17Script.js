function checkDetails(){
    var empId = document.getElementById("empId");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var designation = document.getElementById("designation");
    var age = document.getElementById("age");
    var salary = document.getElementById("salary");
    var location = document.getElementById("location");
    var gender = document.getElementById("gender");
    var doj = document.getElementById("doj");
    var contact = document.getElementById("contact");

    var empIDregex = /^\d{5}$/;
    var salaryregex = /^\d{5,6}$/;
    var emailregex = /^[a-zA-Z0-9.!$#]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/;
    var contactregex = /^\d{10}$/;

    if(empId.value === ""){
        document.getElementById("empIderror").innerHTML = "Employee Id is required field...";
        document.getElementById("empIderror").style.display = "block";
        empId.style.border = "1px solid red";
    }
    else if(empIDregex.test(empId.value) == false){
        document.getElementById("empIderror").innerHTML = "Employee Id should be 5 digit only...";
        document.getElementById("empIderror").style.display = "block";
        empId.style.border = "1px solid red";
    }
    else{
        document.getElementById("empIderror").style.display = "none";
        empId.style.border = "1px solid green";
    }  

    if(name.value === ""){
        document.getElementById("nameerror").innerHTML = "Employee Name is required field...";
        document.getElementById("nameerror").style.display = "block";
        name.style.border = "1px solid red";
    }
    else{
        document.getElementById("nameerror").style.display = "none";
        name.style.border = "1px solid green";
    } 
    if(email.value === ""){
        document.getElementById("emailerror").innerHTML = "Employee Email is required field...";
        document.getElementById("emailerror").style.display = "block";
        email.style.border = "1px solid red";
    }
    else if(emailregex.test(email.value) == false){
        document.getElementById("emailerror").innerHTML = "Enter valid email ID...";
        document.getElementById("emailerror").style.display = "block";
        email.style.border = "1px solid red";
    }
    else{
        document.getElementById("emailerror").style.display = "none";
        email.style.border = "1px solid green";
    } 
    if(designation.value === ""){
        document.getElementById("deserror").innerHTML = "Employee Designation is required field...";
        document.getElementById("deserror").style.display = "block";
        designation.style.border = "1px solid red";
    }
    else{
        document.getElementById("deserror").style.display = "none";
        designation.style.border = "1px solid green";
    } 
    if(age.value.length == 0){
        document.getElementById("ageerror").innerHTML = "Employee Age is required field...";
        document.getElementById("ageerror").style.display = "block";
        age.style.border = "1px solid red";
    }
    else{
        document.getElementById("ageerror").style.display = "none";
        age.style.border = "1px solid green";
    } 

    if(salary.value === ""){
        document.getElementById("salaryerror").innerHTML = "Employee Salary is required field...";
        document.getElementById("salaryerror").style.display = "block";
        salary.style.border = "1px solid red";
    }
    else if(salaryregex.test(salary.value) == false){
        document.getElementById("salaryerror").innerHTML = "Enter valid salary...";
        document.getElementById("salaryerror").style.display = "block";
        salary.style.border = "1px solid red";
    }
    else{
        document.getElementById("salaryerror").style.display = "none";
        salary.style.border = "1px solid green";
    } 
    if(contact.value === ""){
        document.getElementById("contacterror").innerHTML = "Employee Contact is required field...";
        document.getElementById("contacterror").style.display = "block";
        contact.style.border = "1px solid red";
    }
    else if(contactregex.test(contact.value) == false){
        document.getElementById("contacterror").innerHTML = "Enter Valid Contact Number...";
        document.getElementById("contacterror").style.display = "block";
        contact.style.border = "1px solid red";
    }
    else{
        document.getElementById("contacterror").style.display = "none";
        contact.style.border = "1px solid green";
    } 

    if(doj.value === ""){
        document.getElementById("dojerror").innerHTML = "Employee Date of Joining is required field...";
        document.getElementById("dojerror").style.display = "block";
        doj.style.border = "1px solid red";
    }
    else {
        if(checkDate(doj) == false){
            document.getElementById("dojerror").innerHTML = "Enter valid date...";
            document.getElementById("dojerror").style.display = "block";
            doj.style.border = "1px solid red";
        }
        else{
            document.getElementById("dojerror").style.display = "none";
            doj.style.border = "1px solid green";
        }
    }
    

    if(location.selectedIndex == 0) {
        document.getElementById("locationerror").innerHTML = "Please Select City...";
        document.getElementById("locationerror").style.display = "block";
        location.style.border = "1px solid red";
    }  
    else{
        document.getElementById("locationerror").style.display = "none";
        location.style.border = "1px solid green";
    } 
    if($('input[name=gender]:checked').length == 0){
        document.getElementById("gendererror").innerHTML = "Please Select Gender...";
        document.getElementById("gendererror").style.display = "block";
    } 
    else{
        document.getElementById("gendererror").style.display = "none";
    } 
    
}

function checkDate(date){
    var flag = true;
    var dateStr = date.value;
    splitedDateArray = dateStr.split("-");
    
    for (var i of splitedDateArray){
        if(isNaN(i)){
            flag = false;
        }
        if((i.length > 4)){
            flag = false;
        }
    }

    var maxDate=31;
    var m = splitedDateArray[1];
    if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
        maxDate=31;
    }
    else if(m == 4 || m == 6 || m == 9 || m == 11){
        maxDate=30;
    }
    else if(m == 2){
        if(splitedDateArray[2] % 4 == 0 && splitedDateArray[2] % 100 != 0 || splitedDateArray[2] % 400 == 0){
            maxDate = 29;
        }
        else{
            maxDate = 28;
        }
    }
    if( splitedDateArray[0] > maxDate){
        flag = false;
    }

    if(splitedDateArray.length > 3){
        flag = false;
    }
    
    if(splitedDateArray[0].length > 2 || splitedDateArray[1].length > 2){
        flag = false;
    }
    if(splitedDateArray[0] < 1 || splitedDateArray[0] > 31){
        flag = false;
    }
    if(splitedDateArray[1] < 1 || splitedDateArray[1] > 12){
        flag = false;
    }

    return flag;
}


