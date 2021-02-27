//get elements
let content = document.getElementById('content');
let exam = document.forms.exam;
let ans = [];

for (let i = 0; i < 10; i++ ){
    ans[i] = document.getElementsByName(`a${i+1}`);
}

console.log(ans);

let timer = setTimeout ( () => {
    content.innerHTML = "Sorry! Time's Up";
}, 5000);

function calculateMarks () {
    let marks = 0;
    for (i of ans) {
        console.log(i)
        if (i.value == 'right') {
            marks++;
        }
    }
    return marks;
}

exam.onsubmit = (event) => {
    event.preventDefault();

    clearTimeout(timer);
    console.log('submited')
    let m = calculateMarks();
    content.innerHTML = `Obtained marks: ${m}`;
}