import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __direname = path.dirname(__filename);

// join() this uses relative path
const filePath2 = path.join(__direname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() this uses absolute path 
const filePath3 = path.resolve(__direname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
