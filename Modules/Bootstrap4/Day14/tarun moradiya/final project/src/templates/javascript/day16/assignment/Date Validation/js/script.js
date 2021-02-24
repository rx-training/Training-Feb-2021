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
    let leapyear = false;

      // leap year if perfectly visible by 400
      if (year % 400 == 0) {
        leapyear = true;
    }
    // not a leap year if visible by 100
    // but not divisible by 400
    else if (year % 100 == 0) {
        leapyear = false;
    }
    // leap year if not divisible by 100
    // but divisible by 4
    else if (year % 4 == 0) {
        leapyear = true;
    }
    // all other years are not leap year
    else {
        leapyear = false;
    }

    

    if(!/[0-9]{2}-[0-9]{2}-[0-9]{4}/.test(dateVal)) {
        //date formate

        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! date should be in MM-DD-YYYY formate and numbers only';   
        valid = false;
    } else if (mon < 1 || mon > 12) {
        //check month

        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! month should be between 1 - 12';
        valid = false;
    } else if (dat < 0 || dat > 31) {
        //check day

        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! day should be between 1 - 31';
        valid = false;
    } else if (year < 1) {
        //check year
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! year should be greater then 0';
        valid = false;
    } else if (mon == 2 && dat > 29) {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! Fabruary has 29 days only';   
        valid = false;
    } else if (mon == 2 && leapyear == false && dat > 28) {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! not a leapyear';   
        valid = false;
    } else if ((mon == 4 || mon == 6 || mon == 9 || mon == 11) && (dat > 30)) {
        output.classList.remove('text-success');
        output.classList.add('text-danger');
        output.innerHTML = '<br>invalid! this month have only 30 days';   
        valid = false;   
    } else if (valid == true) {
        output.classList.remove('text-danger');
        output.classList.add('text-success');
        output.innerHTML = '<br><h1>Date is Valid</h1>';   
        
    }
}