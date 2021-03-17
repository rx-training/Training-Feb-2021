function displayRadioValue(num1,num2) { 
    var ele = document.getElementsByName('sum'); 
      var op;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        {
            
                op=ele[i].value;
        }
    }
     
console.log(op);
    var n1 = parseInt(num1);  
    var n2 = parseInt(num2);    
    switch(op){
        case "add":
            num3=n1+n2;   
            document.getElementById("result").value= "Result is : "+num3;
            break;
        case "sub":
            num3=n1-n2;   
            document.getElementById("result").value= "Result is : "+num3;  
            break;
        case "mul":
            num3=n1*n2;   
            document.getElementById("result").value= "Result is : "+num3; 
            break;
        case "div":
            num3=n1/n2;
            document.getElementById("result").value="Result is : "+num3;
            break;
        default:
            num3=0;
            document.getElementById("result").value= "Result is : "+num3;
            break;
    }
    
    
}

