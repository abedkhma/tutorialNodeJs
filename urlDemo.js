import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
// Also we can access the info individually
const urlObj = new URL(urlString);
console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file url
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// URLSearchParams()
const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);
params.delete('limit');
console.log(params);