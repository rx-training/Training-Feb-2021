var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, "minal", 30); 

console.log(result)