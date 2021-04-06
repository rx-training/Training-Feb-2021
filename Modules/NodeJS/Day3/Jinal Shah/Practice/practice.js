
/* 1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” 
      and load the same in index.js */

   const data = require('./hello')
   console.log(data)
   console.log(data.data)

/* 2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, 
      and exports area and perimeter of rectangle */

      const area = require('./Rectangle')
      //console.log(area.data)
      console.log("area = "+ area.area)
      console.log("perimeter = "+ area.perimeter)