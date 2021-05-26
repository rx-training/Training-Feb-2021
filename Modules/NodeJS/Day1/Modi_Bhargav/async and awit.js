function myDisplayer(some) {
  console.log(some)
}
async function myFunction() {return "Hello";}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

// ex-2
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("My name Modi !!");
  });
  console.log(await myPromise);
}
myDisplay();

// ex-3
async function getFile() {
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "file.txt");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myResolve("File not Found");
      }
    };
    req.send();
  });
  console.log(await myPromise);
}
getFile();