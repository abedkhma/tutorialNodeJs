import http from 'http';
const PORT = process.env.PORT;
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { promises } from 'dns';


// Get current path (NOT available on the ES module) so we make it
// __filename it will give the file path Im in 
// __dirname it will give the dir path Im in

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, __filename);

const server = http.createServer(async(req, res) =>{

    try {
        // Check if GET request
        if(req.method === 'GET'){
            let filePath;
            if (req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
               throw new Error('Not Found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' }); 
        res.end('<h1>Server Error</h1>');
    }

    // res.setHeader('Content-Type', 'text/html');
    // res.write('Hello World');
    // res.statusCode = 404;
    // res.end('<h1>Hello World!</h1>');   here you send the defined content type
    // res.writeHead(200, { 'Content-Type': 'text/html' }); 
    // res.end('<h1>Homepage</h1>');


    // console.log(req.url);
    // console.log(req.method);


    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
