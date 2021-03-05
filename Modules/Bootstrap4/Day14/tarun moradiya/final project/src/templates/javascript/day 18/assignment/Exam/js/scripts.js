//get elements
let exam = document.forms.exam;

//start Exam Timer
function startExam(id) {

    //remove button
    document.getElementById(id).style.display = 'none';
    document.getElementById('stop-btn').style.display = 'inline-block';

    // Find the distance between now and the count down date
    var countdown = 1000 * 60 * 60 * 3;

    // Get today's date and time
    var now = new Date().getTime();

    //ending date and time
    var end = now + countdown;

    console.log(end);
        
    // Update the count down every 1 second
    var timer = setInterval(function() {
        
        var distance = end - new Date().getTime();
        
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = 'Time Left: ' + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
        clearInterval(timer);
        document.getElementById("demo").innerHTML = "Times Up";
        }
    }, 1000);

    
    //display marks and stop timer when exam submit
    exam.onsubmit = (event) => {
        event.preventDefault();

        document.getElementById('reset-btn').style.display = 'inline-block';
        document.getElementById('stop-btn').style.display = 'none';

        clearInterval(timer);

        document.getElementById('output').innerHTML = `Obtained marks: ${calculateMarks()}`;
        document.getElementById('output').classList.add('p-5');
    }
}



//calculate marks
function calculateMarks () {
    let ans = [];
    
    for (let i = 0; i < 10; i++ ){
        ans[i] = document.getElementsByName(`a${i+1}`);
    }
    
    console.log(ans);

    let marks = 0;
    for (i of ans) {
        console.log(i)

        for (j of i) {
            if (j.value == 'right' && j.checked) {
                marks++;
            }
        }
    }
    return marks;
}

