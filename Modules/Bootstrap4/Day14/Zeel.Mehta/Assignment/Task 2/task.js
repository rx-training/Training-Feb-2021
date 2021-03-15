function checkFunction(eid,epw)
{
    if(eid === "admin")
    {
        if(epw == "admin1")        
        {
            console.log("login...");
            window.location.href = "emp.html";
        }
        else
        {
            console.log("logout");
        }
    }
    else
    {
        console.log("logout");
    }
}
function validateForm() {
    var ename= document.getElementById("ename").value;
    var ecno = document.getElementById("ecno").value;

    var err = new Array(1);
        var i=0;
    if(ename == "") {
            err[0] = "Employee Name is required.";  
        }
    else{
            err[0] = "";    
        }
    if(ecno == "") {
            err[1] = "Contact No. is required.";  
        }
    else{
            err[1] = "";    
        }

        document.getElementById("abc").innerHTML = "";
    for(i; i<err.length; i++) {
        if(err[i] == "") {
            continue;
        }
        document.getElementById("abc").innerHTML += '<div class="alert alert-info">' + err[i] + '</div>';
    }
    return false;
}

