
const len=Number(process.argv[2]);
const wid=Number(process.argv[3]);
const areaOfRectangle=len*wid;

const perimeter=2*(len+wid);

console.log(`Area of rectangle is ${areaOfRectangle} and Perimeter is ${perimeter}`);

const rectangle={
    areaOfRectangle:areaOfRectangle,
    perimeter:perimeter
};

exports.rectangle=rectangle;