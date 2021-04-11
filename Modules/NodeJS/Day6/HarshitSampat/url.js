/* This file is for url module of nodejs */

//The url module splits up a web address into redable parts

var url =  require('url');
var addr ='http://localhost:8080/default.htm?year=2017&month=february'

//parse the address
var q =url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/* The  query  property returns an object with all the  query string parameter as properties*/
var qdata=(q.query)
console.log(qdata.month) 