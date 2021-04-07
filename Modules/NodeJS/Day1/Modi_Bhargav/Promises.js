function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 5;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// ex-2
let myPromises = new Promise(function(myResolve, myReject) {
  setTimeout(function(){
     myResolve("I love You !!");
     }, 3000);
});

myPromises.then(function(value) {
  console.log(value);
});

// ex-3
function myDisplayer(some) {
  console.log(some);
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "file.txt");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer); 