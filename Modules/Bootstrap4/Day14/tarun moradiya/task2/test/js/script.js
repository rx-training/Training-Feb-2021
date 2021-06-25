// login page

function loadData(){
    localStorage.setItem('hr1', '{"username": "tarun", "password": "123"}')

    // Employee data array

    let emps = 
    [{id: 1, name: 'Tarun Moradiya', salary: 20000, contact: 990991234, country: 'India', states: 'Gujrat'},
    {id: 2, name: 'John Doe', salary: 20000, contact: 778991234, country: 'US', states: 'Texas'},
    {id: 3, name: 'Parth Shah', salary: 20000, contact: 990885234, country: 'Canada', states: 'Manitoba'},
    {id: 4, name: 'Devang Dabhi', salary: 20000, contact: 990998564, country: 'Japan', states: 'Tohoku'}]; 

    console.log(emps)
    localStorage.setItem('employee', JSON.stringify(emps));

}

//login
function login(){
    event.preventDefault();

    let hr = localStorage.getItem('hr1');
    let hrObj = JSON.parse(hr);

    let uname = document.getElementById('username').value
    let upassword = document.getElementById('password').value

    if(hrObj.username == uname && hrObj.password == upassword) {
        window.location.replace('index.html');
        sessionStorage.setItem('logged', 'true')
    } else {
        alert("Invalid username or password \n***try username: tarun password: 123")
    }


}

//logout
function logout() {
    sessionStorage.setItem('logged', 'false');
    location.replace('login.html')
}



// Get Elements
let empTable = document.getElementById('emp-table');

// Show Employee Data
function showData() {

    if(sessionStorage.getItem('logged') != 'true') {
        window.location.replace('login.html');
        alert('You are not logged in')
        return false;
    }

    emp = localStorage.getItem('employee');
    empObj = JSON.parse(emp)
    
    let output = '' 

    for (let i in empObj) {
        output += `
        <tr>
            <td><input type="number" id="${i}-id" class="form-control bg-dark text-info" value="${empObj[i].id}"></td>
            <td><input type="text" id="${i}-name" class="form-control bg-dark text-info" value="${empObj[i].name}"></td>
            <td><input type="number" id="${i}-salary" class="form-control bg-dark text-info" value="${empObj[i].salary}"></td>
            <td><input type="number" id="${i}-contact" class="form-control bg-dark text-info" value="${empObj[i].contact}"></td>
            <td><select onchange="selectChange(this.id)" name="country" class="form-control bg-dark text-info" id="${i}-country">
                              <option value="${empObj[i].country}">${empObj[i].country}</option>
                              <option value="India">India</option>
                              <option value="US">US</option>
                              <option value="Canada">Canada</option>
                              <option value="Japan">Japan</option>
                            </select></td>
            <td> <select name="states" class="form-control bg-dark text-info" id="${i}-states">
            <option value="${empObj[i].states}">${empObj[i].states}</option>
            </select></td>
            <td><botton class="btn btn-info" onclick="changeData(this.id)" id="${i}">Edit</button></td>
        </tr>
        `;

    }

    

    empTable.innerHTML += output;
}


function selectChange(id){
    console.log('changed')

        var selectedCountry = $(`#${id}`).children("option:selected").val();
        
        if(selectedCountry == 'India') {
            $(`#${id}`).parent().next().children().empty().append(`<option value="Gujrat">Gujrat</option>
                <option value="MP">MP</option>
                <option value="UP">UP</option>
                <option value="Rajastan">Rajastan</option>
                `)
        } else if(selectedCountry == 'US') {
            $(`#${id}`).parent().next().children().empty().append(`<option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Georgia">Georgia</option>
                <option value="Florida">Florida</option>
                `)
        } else if(selectedCountry == 'Canada') {
            $(`#${id}`).parent().next().children().empty().append(`<option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Nunavut">Nunavut</option>
                `)
        } else if(selectedCountry == 'Japan') {
            $(`#${id}`).parent().next().children().empty().append(`<option value="Hokkaidu">Hokkaidu</option>
                <option value="Tohoku">Tohoku</option>
                <option value="Kanto">Kanto</option>
                <option value="Chubu">Chubu</option>
                `)
        } 
}

function changeData(id){
    event.preventDefault();

    emp = localStorage.getItem('employee');
    empObj = JSON.parse(emp)

    console.log(empObj)

    if (/[0-9]+/.test(document.getElementById(`${id}-name`).value) == true ) {
        alert("name should not contain number!")
    } else {

        empObj[id].id = Number(document.getElementById(`${id}-id`).value);
        empObj[id].name = document.getElementById(`${id}-name`).value;
        empObj[id].salary = document.getElementById(`${id}-salary`).value;
        empObj[id].contact = document.getElementById(`${id}-contact`).value;
        empObj[id].country = document.getElementById(`${id}-country`).value;
        empObj[id].states = document.getElementById(`${id}-states`).value;
        
    
        localStorage.setItem('employee', JSON.stringify(empObj))
    }

}

function addData() {

    emp = localStorage.getItem('employee');
    empObj = JSON.parse(emp)

    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let sal = document.getElementById('salary').value;
    let con = document.getElementById('contact').value;
    let ucountry = document.getElementById('country').value;
    let ustates = document.getElementById('states').value;

    if (/[0-9]+/.test(name) == true ) {
        alert("name should not contain number!")
    } else {
        empObj.push({id: id, name: name, salary: sal, contact: con, country: ucountry, states: ustates})
        localStorage.setItem('employee', JSON.stringify(empObj))

        console.log(emps)
    }
}