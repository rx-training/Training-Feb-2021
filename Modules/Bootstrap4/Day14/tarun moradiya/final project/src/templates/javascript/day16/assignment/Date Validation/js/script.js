//Get Elements
let myform = document.getElementById('myform');
let dateInp = document.getElementById('date-inp');
let output = document.getElementById('output');

myform.onsubmit = function(event) {
    event.preventDefault();
    console.log(event);

    dateVal = dateInp.value;
    dateArr = dateVal.split('-');

    let mon = Number(dateArr[0]);
    let dat = Number(dateArr[1]);
    let year = Number(dateArr[2]);

    let valid = true;

    if (!Number.isNaN(mon)) {
        if (mon < 1 || mon > 12) {
            output.classList.remove('text-success');
            output.classList.add('text-danger');
            output.innerHTML = '<br>invalid! month should be between 1 - 12';
            valid = false;
        }
    } else {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! input should be digits only';   
        valid = false;
    }   
    
    if (!Number.isNaN(dat)) {
        if (dat < 0 || dat > 31) {
            output.classList.remove('text-success');
            output.classList.add('text-danger');
            output.innerHTML = '<br>invalid! day should be between 1 - 31';
            valid = false;
        }
    } else {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! input should be digits only';   
        valid = false;
    }
    
    if (!Number.isNaN(year)) {
        if (! /[0-9]{4}/.test(year)) {
            output.classList.remove('text-success');
            output.classList.add('text-danger');
            output.innerHTML = '<br>invalid! year should be four digits';
            valid = false;
        } else if (year == 0) {
            output.classList.remove('text-success');
            output.classList.add('text-danger');
            output.innerHTML = '<br>invalid! year should be greater then 0';
            valid = false;
        } 
    } else {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! input should be digits only';   
        valid = false;
    }

    if (valid == true) {
        output.classList.remove('text-danger');
        output.classList.add('text-success');
        output.innerHTML = '<br><h1>Date is Valid</h1>';   
        
    }
}