function cal(num1,num2)
{
    var s = document.getElementsByName('sum'); 
    var op;
    for(i = 0; i < s.length; i++) { 
        if(s[i].checked) 
            op= s[i].value;
    }
   
    switch(op){
        case 0:
            num3=num1+num2;
            
            break;
        case 1:
            num3=parseInt(num1)-parseInt(num2);
            
            break;
        case 2:
            num3=parseInt(num1)*parseInt(num2);
            
            break;
        case 3:
            num3=parseInt(num1)/parseInt(num2);
            
            break;
        default:
            num3=0;
            
            break;

    }
    document.getElementById("result").innerHTML= num3;
    
}