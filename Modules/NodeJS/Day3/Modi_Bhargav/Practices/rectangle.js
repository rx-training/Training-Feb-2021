// practices
const data1 = function (msg) { 
  console.log(msg);
};


// or

const Name = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () { 
      return this.firstName + ' ' + this.lastName;
  }
}

/* 2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area and perimeter of rectangle */

const areaofRectangle = (l, w) => {
  return l * w;
}

const perimeterRectangle = (l, w) => {
  return 2 * (l + w );
}

module.exports = {data1,Name,areaofRectangle,perimeterRectangle}



