//Store data to local storage
var myData = { products : [ {Name : "Cheese", Price : 2.50, Location : "Refrigerated foods"},
                            {Name : "Crisps", Price : 3, Location : "the Snack isle"},
                            {Name : "Pizza", Price : 4, Location : "Refrigerated foods"},
                            {Name : "Chocolate", Price : 1.50, Location : "the Snack isle"},
                            {Name : "Self-raising flour", Price : 1.50, Location : "Home baking"},
                            {Name : "Ground almonds", Price : 3, Location : "Home baking"},
                ] };
myJSON = JSON.stringify(myData);
localStorage.setItem("allProducts", myJSON);

//Retreive data and print in console and table
function retrieveDataFromLocal(){
    var myProducts = JSON.parse(localStorage.getItem("allProducts"));
    console.log(myProducts);

    //Set data into table
    document.getElementById("myTableData").innerHTML = "<tr><th> Product Name </th><th> Product Price </th><th> Location </th></tr>";
    for(var p of myProducts.products){
        document.getElementById("myTableData").innerHTML += "<tr><td>"+p.Name+"</td><td>"+p.Price+"</td><td>"+p.Location+"</td></tr>";
    }
}

//Get data from json file using Web fetch API
async function getProducts(file) {
    let myObject = await fetch(file);
    let myProducts = await myObject.json();
    return myProducts;
}
function retrieveDataFromFile(){
    getProducts("../assets/js/allProducts.json").then( function (Products){
        
        //productList = JSON.parse(Products);
        console.log(Products);

        //Set data into table
        document.getElementById("myTableData2").innerHTML = "<tr><th> Product Name </th><th> Product Price </th><th> Location </th></tr>";
        for(var p of Products.products){
            document.getElementById("myTableData2").innerHTML += "<tr><td>"+p.Name+"</td><td>"+p.Price+"</td><td>"+p.Location+"</td></tr>";
        }
    });
}


//Add to cart 
var cartProducts = [];
var productIds = [];
function addToCart(trIndex){

    if(productIds.includes(trIndex)){
        alert("Already added to cart");
    }
    else{
        var trow = document.getElementById("cartTable").rows[trIndex];
        product = { "pid" :parseInt(trow.cells[0].innerHTML) ,
                    "pname":trow.cells[1].innerHTML ,
                    "price":trow.cells[2].innerHTML ,
                    "quantity":trow.cells[3].innerHTML             
                };
        cartProducts.push(product);
        myJSON = JSON.stringify(cartProducts);
        localStorage.setItem("cartProducts", myJSON);
        productIds.push(product.pid);
    }
}

function showCart(){
    var myCartprods = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(myCartprods);

    //Set data into table
    document.getElementById("myTableCart").innerHTML = "<tr><th> Product Id </th><th> Product Name </th><th> Price </th><th> Quantity </th></tr>";
    for(var p of myCartprods){
        document.getElementById("myTableCart").innerHTML += "<tr><td>"+p.pid+"</td><td>"+p.pname+"</td><td>"+p.price+"</td><td>"+p.quantity+"</td></tr>";
    }
}
