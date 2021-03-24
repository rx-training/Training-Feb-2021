//Callback
function squareNumber(num, callback){
    callback(num.value * num.value);
}
function print(result){
    document.getElementById("answer1").innerHTML = "Square is : "+ result;
    document.getElementById("answer1").style.display = "block";
}

//var and let keyword
function change(){
    var x = 50;
    let y = 50;
    if(true){
        var x=100;
        let y=100; 
    }
    document.getElementById("answer2").innerHTML = "value of x : " + x +" <br>value of y : "+ y;
    document.getElementById("answer2").style.display = "block";
}

//use Promise
function callPromiseForReverse(str){
    var data = str.value;
    var strregex = /[a-zA-z]+/;
    function reverseString(str){
        return new Promise((resolve, reject)=>{
            let successMsg ={
                status: "success",
                message: "Reversed string is : " + data.split("").reverse().join("")
            };
            let errorMsg ={
                status: "error",
                message: "String not valid."
            };
            if(strregex.test(data) == true){
                resolve(successMsg);
                document.getElementById("errormsg2").style.display = "none";
            }
            else{
                reject(errorMsg);
            }

        })
    }
    reverseString(data).then(
        (successMsg)=>{
            setTimeout(show, 3000);
            function show() {
                document.getElementById("reverseAns").innerHTML = successMsg.message;
            }
            
        },
        (errorMsg)=>{
            document.getElementById("errormsg2").innerHTML = errorMsg.message;
            document.getElementById("errormsg2").style.display = "block";
        }
    );
}

//Timer
function startTimer() {
    setTimeout(alertFunc, 180*60*1000);

    var endDate = new Date();
    endDate.setHours(endDate.getHours() + 3);
    var countDownDate = endDate.getTime();

    var x = setInterval(function() {

    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("timeover").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeover").innerHTML = "Exam Finished...";
    }
    }, 1000);

}
  
function alertFunc() {
    alert("Exam is over...");
    document.getElementById("timeclose").innerHTML = "Exam is over...";
    document.getElementById("timeclose").style.display = "block";
}