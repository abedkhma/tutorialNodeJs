import { createServer } from 'http';
const PORT = process.env.PORT;
const users = [ 
    {id: 1, title: 'User 1'},
    {id: 2, title: 'User 2'},
    {id: 3, title: 'User 3'} 
]; 

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content_Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user){
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message:'User Not Found' }));
    }
    res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        // Should be pushed to the database
        users.push(newUser)
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message:'Route Not Found' }));
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
       jsonMiddleware(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            getUserHandler(req, res);
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET' ) {
            getUserByIdHandler(req, res);
        } else if (req.url === '/api/users' && req.method === 'POST') {
            createUserHandler(req,res);
        } else {
            notFoundHandler(req, res);
        }
       })
    });
});

server.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});


// if (req.url === '/api/users' && req.method === 'GET') {
//     res.setHeader('Content_Type', 'application/json');
//     res.write(JSON.stringify(users));
//     res.end();
// } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
//     const id = req.url.split('/')[3];
//     const user = users.find((user) => user.id === parseInt(id));
//     if (user){
//         res.setHeader('Content_Type', 'application/json');
//         res.write(JSON.stringify(user));
//     } else {
//         res.setHeader('Content_Type', 'application/json');
//         res.statusCode = 404;
//         res.write(JSON.stringify({ message:'User Not Found' }));
//     }
//     res.end();
// } else {
//     res.setHeader('Content_Type', 'application/json');
//     res.statusCode = 404;
//     res.write(JSON.stringify({ message:'Route Not Found' }));
//     res.end();
// }