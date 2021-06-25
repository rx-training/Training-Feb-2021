var path = require('path');

const p1 = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(p1);
const p2 = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log(p2);
const p3 = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});
console.log(p3);
const p4=path.join('/foo', 'bar', 'baz/asdf', 'quux',"..",".." );
console.log(p4);

const p5=path.normalize('/foo/bar//baz/asdf/quux');
console.log(p5);

const p6=path.normalize('C:\\temp\\foo\\bar');
console.log(p6);