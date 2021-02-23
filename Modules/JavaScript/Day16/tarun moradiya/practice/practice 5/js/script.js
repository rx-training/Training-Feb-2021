//Get Elements
let pushBtn = document.getElementById('push');
let popBtn = document.getElementById('pop');
let shiftBtn = document.getElementById('shift');
let unshiftBtn = document.getElementById('unshift');

let pushForm = document.getElementById('push-form');
let unshiftForm = document.getElementById('unshift-form');

let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');

let outputList = document.getElementById('output-list');

//List array function to create list

function listArray() {
    lists = '';

    for (i of arr) {
        lists += `<li class="bg-danger rounded p-3 mt-2">${i}</li>` 
    }

    outputList.innerHTML = lists;
}

//create Initial array

let arr = ["item 1", "item 2", "item 3", "item 4", "item 5"]
listArray();

//on focusout from input

inp1.onfocusout = function() {
    inp1.style.border = '1px solid black';
}

inp2.onfocusout = function() {
    inp2.style.border = '1px solid black';
}

//when clicked on button

pushBtn.onclick = function() {
    pushForm.style.display = 'block';
    unshiftForm.style.display = 'none';

    inp1.focus();
    inp1.style.border = '2px solid red';
}

unshiftBtn.onclick = function() {
    pushForm.style.display = 'none';
    unshiftForm.style.display = 'block';

    inp2.focus();
    inp2.style.border = '2px solid red';
}

popBtn.onclick = function() {
    arr.pop();
    listArray();
}

shiftBtn.onclick = function() {
    arr.shift();
    listArray();
}

//on form submition

pushForm.onsubmit = function() {
    let inp1Val = inp1.value;
    arr.push(inp1Val);
    listArray();
}

unshiftForm.onsubmit = function() {
    let inp2Val = inp2.value;
    arr.unshift(inp2Val);
    listArray();
}
