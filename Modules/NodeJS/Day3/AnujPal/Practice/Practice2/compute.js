const args = process.argv.slice(2)
var height, width, area, perimeter;
height = 5
width = 4;
area = parseInt(height) * parseInt(width);
perimeter = 2 * (height + width)

module.exports = {
    Area: area,
    Perimeter: perimeter
}

