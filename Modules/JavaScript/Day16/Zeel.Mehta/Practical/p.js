var person = 
    {
        firstname: "Zeel",
        lastname: "Mehta",
        age: 21,
        eyecolor: "brown"
    };
function deleteFunction() 
    {
        document.getElementById("demo1").innerHTML ="Before Delete : "+ person.firstname + " is " + person.age + " years old.";
        delete person.firstname;
        document.getElementById("demo2").innerHTML ="After Delete : "+person.firstname + " is " + person.age + " years old.";
    }

    var colors = ["Red", "Blue", "Green", "White"];
    var col="";

function checkFunction()
{
    if(colors.length!=0)
    {
        document.getElementById("demo").innerHTML="STRING IS NOT BLANK";
    }
    else
    {
        document.getElementById("demo").innerHTML="STRING IS BLANK";
    }
}
            