
//get products data from the file
async function getProducts (file) {
    let myObjects = await fetch(file);
    //console.log(myObjects);

    let myProducts = await myObjects.json();
    //console.log(myProducts);

    return (myProducts);
    
}

//display products on the page
getProducts('data.json').then(
    function (myProducts) {
        let productList = JSON.stringify(myProducts);
        //console.log(productList)

        localStorage.setItem('myProducts', productList);

        let prods = JSON.parse(productList);

        let out = '';
        
        for (i in prods) {
            out += `
            <tr>
                <td>${prods[i].ProductID}</td>
                <td>${prods[i].ProductName}</td>
                <td>${prods[i].Price}</td>
                <td>${prods[i].Quantity}</td>
                <td><button class="btn btn-outline-info btn-block" id="${i}" onclick="addToCart(this.id)">Add To Cart</button></td>
            </tr>        `
        }

        document.getElementById('show').innerHTML =`
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>` + out;
    }
)

//check which product to add
function addToCart(id) {
    // console.log('submited')
    // console.log(id);

    let myProducts = localStorage.getItem('myProducts');

    let myProds = JSON.parse(myProducts)

    for (i in myProds) {
        if (id == i) {
            // console.log(myProds[i])
            addItem(myProds[i]);
        }
    }
}

//add to cart if product does not exist
function addItem(add_item) {
    console.log(add_item)
    // parse existing storage key or string representation of empty array
    var existingEntries = JSON.parse(localStorage.getItem("cart") || '[]');

    // Add item if it's not already in the array, then store array again
    if ((JSON.stringify(existingEntries)).search(JSON.stringify(add_item)) == -1) {
        console.log(JSON.stringify(existingEntries))
        console.log(JSON.stringify(add_item))
      existingEntries.push(add_item);
      localStorage.setItem("cart", JSON.stringify(existingEntries));
    }else{
       // or tell user it's already there
       console.log(add_item + ' already exists');
       alert(add_item.ProductName + ' already exists');
    }
  }

//show cart
function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart)

    let output = '';
    let total = 0;
    for(i of cart) {
        output += `
        <tr>
            <td>${i.ProductID}</td>
            <td>${i.ProductName}</td>
            <td>${i.Price}</td>
        </tr>  `;

        total += i.Price;
    }

    document.getElementById('cart-table').innerHTML =`
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
        </tr>` + output + `<tr> <td></td> <td></td> <td>Total: ${total}</td> </tr>`;
}