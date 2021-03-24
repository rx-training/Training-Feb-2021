function greaterNumber(num1, num2, num3){
    var n1 = parseInt(num1.value);
    var n2 = parseInt(num2.value);
    var n3 = parseInt(num3.value);
    var greater = n1;
    if( n2 > n1 && n2 > n3){
        greater = n2;
    }
    else if(n3 > n1 && n3 > n2){
        greater = n3;
    }
    document.getElementById('greaterNumber').innerHTML = greater;
}
function additionGreater40(num1, num2, num3){
    var n1 = parseInt(num1.value);
    var n2 = parseInt(num2.value);
    var n3 = parseInt(num3.value);

    var myNumbers = [n1, n2, n3];
    var addition = 0;
    for (var n of myNumbers){
        if(n > 40){
            addition += n;
        }
    }
    document.getElementById('additionNumber').innerHTML = addition;
}
function cityNamesOneByOne(){
    var cityNames = ["Mumbai", "Delhi", "Ahmedabad", "Pune", "Surat"];
    for(var i=0; i< cityNames.length; i++){
        alert("city "+ (i+1) + " is : "+cityNames[i]);
    }
}
function cityNamesOnce(){
    var cityNames = ["Mumbai", "Delhi", "Ahmedabad", "Pune", "Surat"];
    var allCities = "";
    for(var i of cityNames){
        allCities += i + "\n";
    }
    alert("All city names : \n"+allCities);
}

function calculate(num1 , num2){
    if( num1.value == "" || num2.value == "")
    {
        alert("Please enter two numbers.");
    }
    var num1 = parseInt(num1.value);
    var num2 = parseInt(num2.value);
    var operation = document.getElementsByName('operation'); 
    
    for(i = 0; i < operation.length; i++) { 
        if(operation[i].checked) 
        var selectedOperation = operation[i].value; 
    } 
    switch(selectedOperation){
        case "addition":
            document.getElementById('answer').innerHTML = (num1 + num2);
            break;
        case "substraction":
            document.getElementById('answer').innerHTML = (num1 - num2);
            break;
        case "multiplication":
            document.getElementById('answer').innerHTML = (num1 * num2);
            break;
        case "division":
            document.getElementById('answer').innerHTML = (num1 / num2);
            break;
        default:
            alert("Please select any operation." );
    }
}
function resetValues(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    var operation = document.getElementsByName('operation'); 
              
    for(i = 0; i < operation.length; i++) { 
        operation[i].checked = false;
    } 
}