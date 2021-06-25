var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
function getproduct(add){
    
    if(add == click1){
    var a = document.getElementById("1").textContent;
    var b = document.getElementById("2").textContent;
    var c = document.getElementById("3").textContent;
    var d = document.getElementById("4").textContent;
    
        if(count == 0){
        
        var product = [{ProductID : a,
                        ProductName: b,
                        Price: c,
                        Quantity: d},];
        var product1 = JSON.stringify(product);
        localStorage.setItem("product1",product1);
        count += 1;
       }
        else{
                count += 1;
                var h = parseInt(c)*count;
                var j = parseInt(d)*count;
                var product1 = [{ProductID: a, ProductName: b, Price: h, Quantity: j}];
                var product = JSON.stringify(product1);
                localStorage.setItem("product1",product);
                         
        }

    }
    else if(add == click2){
    var a = document.getElementById("5").textContent;
    var b = document.getElementById("6").textContent;
    var c = document.getElementById("7").textContent;
    var d = document.getElementById("8").textContent;
    
        if(count1 == 0){
        
        var product = [{ProductID : a,
                        ProductName: b,
                        Price: c,
                        Quantity: d},];
        var product2 = JSON.stringify(product);
        localStorage.setItem("product2",product2);
        count1 += 1;
       }
        else{
                count1 += 1;
                var h = parseInt(c)*count1;
                var j = parseInt(d)*count1;
                var product1 = [{ProductID: a, ProductName: b, Price: h, Quantity: j}];
                var product = JSON.stringify(product1);
                localStorage.setItem("product2",product);         
        }

    }
  
    else{
        console.log(localStorage.getItem("product1"));
        console.log(localStorage.getItem("product2"));
        console.log(localStorage.getItem("product3"));
        console.log(localStorage.getItem("product4"));
    }
}