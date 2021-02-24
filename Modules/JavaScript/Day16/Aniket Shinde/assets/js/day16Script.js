function checkString(str){
    if(str.value === ""){
        document.getElementById("errormsg").style.display = "block";
        str.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg").style.display = "none";
        str.style.border = "1px solid green";
    }     
}
function splitString(str){
    if(str.value === ""){
        document.getElementById("errormsg2").style.display = "block";
        str.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg2").style.display = "none";
        str.style.border = "1px solid green";
    } 
    var strList = (str.value).split(" ");
    //document.getElementById("answer2").innerHTML = strList;
    var content = document.getElementById("answer2");
    content.innerHTML = "";
    for( var i of strList){
        content.innerHTML += i + "<br>";
    }
    document.getElementById("answer2").style.display = "block";
}
function extractString(str1, num1, num2){
    if(str1.value === ""){
        document.getElementById("errormsg3").style.display = "block";
        str1.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg3").style.display = "none";
        str1.style.border = "1px solid green";
    } 
    if(num1.value === ""){
        document.getElementById("errormsg4").style.display = "block";
        num1.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg4").style.display = "none";
        num1.style.border = "1px solid green";
    } 
    if(num2.value === ""){
        document.getElementById("errormsg5").style.display = "block";
        num2.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg5").style.display = "none";
        num2.style.border = "1px solid green";
    } 
    var resultStr = str1.value.substr(parseInt(num2.value), parseInt(num1.value));
    document.getElementById("answer3").innerHTML = resultStr;
    document.getElementById("answer3").style.display = "block";
}

function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var todaydate = date.getDate();
    document.getElementById("dateAnswer").innerHTML = date + "<br>Formatted Date : "+ todaydate + "-" + (month+1) + "-" + year;
    document.getElementById("dateAnswer").style.display = "block";
}

var cityArray = ["Ahmedabad","Mumbai","Pune","Surat","Delhi","Bangalore"];
document.getElementById("newList").innerHTML = cityArray;
function pushItem(item1){
    if(item1.value === ""){
        document.getElementById("errormsg6").style.display = "block";
        item1.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg6").style.display = "none";
        item1.style.border = "1px solid green";
        var item = item1.value;
        cityArray.push(item);
        item1.value = "";
        document.getElementById("newList").innerHTML = cityArray;
    } 
}
function removeItem(){
    cityArray.pop();
    document.getElementById("newList").innerHTML = cityArray;
}

document.getElementById("shiftList").innerHTML = cityArray;
function unshiftItem(item1){
    if(item1.value === ""){
        document.getElementById("errormsg7").style.display = "block";
        item1.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg7").style.display = "none";
        item1.style.border = "1px solid green";
        var item = item1.value;
        cityArray.unshift(item);
        item1.value = "";
        document.getElementById("shiftList").innerHTML = cityArray;
    } 
}
function shiftItem(){
    cityArray.shift();
    document.getElementById("shiftList").innerHTML = cityArray;
}

document.getElementById("deletedList").innerHTML = cityArray;
function deleteItem(index){
    if(index.value === ""){
        document.getElementById("errormsg8").style.display = "block";
        index.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg8").style.display = "none";
        index.style.border = "1px solid green";
        var index = index.value;
        delete cityArray[parseInt(index)];
        index.value = "";
        document.getElementById("deletedList").innerHTML = cityArray;
    } 
}

document.getElementById("baseList").innerHTML = cityArray;
function sliceList(index){
    if(index.value === ""){
        document.getElementById("errormsg9").style.display = "block";
        index.style.border = "1px solid red";
    }
    else{
        document.getElementById("errormsg9").style.display = "none";
        index.style.border = "1px solid green";
        var index = index.value;
        var slicedArray = cityArray.slice(parseInt(index));
        index.value = "";
        document.getElementById("slicedList").innerHTML = "Sliced Array is :---- " + slicedArray;
    } 
}

// Check date valid or not

function checkDate(date){

    if(date.value === "" ){
        document.getElementById("errormsg10").style.display = "block";
    }
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
        if(splitedDateArray[2] % 4 == 0){
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

    if( flag == true){
        document.getElementById("dateAns").innerHTML = "Date is valid...";
        document.getElementById("dateAns").style.display = "block";
        document.getElementById("errormsg10").style.display = "none";
    }
    else{
        document.getElementById("errormsg10").innerHTML = "Date is not valid...";
        document.getElementById("errormsg10").style.display = "block";
        document.getElementById("dateAns").style.display = "none";
    }
    
    
    
    // switch(splitedDateArray[1]){
    //     case 0:
    //         maxDate = 31;
    //         break;

    // }
    // if(isNaN(dateStr)){
    //     document.getElementById("dateAns").innerHTML = "Not valid date";
    // }
}
