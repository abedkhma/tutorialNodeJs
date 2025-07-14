# Node.js Tutorial Project

A comprehensive Node.js tutorial project demonstrating core Node.js concepts and built-in modules without using any external frameworks.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Modules Demonstrated](#modules-demonstrated)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project serves as a learning resource for Node.js fundamentals, showcasing various built-in modules and core concepts. It includes a simple HTTP server with REST API endpoints, file system operations, crypto utilities, and more.

## ✨ Features

- **HTTP Server**: Custom HTTP server implementation without Express.js
- **REST API**: Basic CRUD operations for users
- **File System Operations**: Reading, writing, and manipulating files
- **Crypto Module**: Hashing and encryption utilities
- **OS Module**: System information utilities
- **Path Module**: File path manipulation
- **URL Module**: URL parsing and manipulation
- **Events**: Custom event handling
- **Process**: Process information and management
- **Middleware Pattern**: Custom middleware implementation

## 📁 Project Structure

```
tutorialNodeJs/
├── server2.js          # Main HTTP server with REST API
├── server.js           # Alternative server implementation
├── index.js            # Entry point with module imports
├── postController.js   # Post management module
├── utils.js           # Utility functions
├── cryptoDemo.js      # Crypto module examples
├── eventsDemo.js      # Events module examples
├── fsDemo.js          # File system examples
├── osDemo.js          # OS module examples
├── pathDemo.js        # Path module examples
├── processDemo.js     # Process module examples
├── urlDemo.js         # URL module examples
├── public/            # Static files
│   ├── index.html
│   └── about.html
├── package.json       # Project configuration
└── README.md         # This file
```

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tutorialNodeJs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   ```

## 💻 Usage

### Starting the Server

```bash
npm start
```

This will start the server using nodemon for development with hot reloading.

### Running Individual Modules

You can run specific demo files to see different Node.js modules in action:

```bash
# File System operations
node fsDemo.js

# Crypto operations
node cryptoDemo.js

# Events handling
node eventsDemo.js

# OS information
node osDemo.js

# Path operations
node pathDemo.js

# Process information
node processDemo.js

# URL parsing
node urlDemo.js
```

## 🔌 API Endpoints

The server provides a simple REST API for user management:

### GET /api/users

Returns all users

```bash
curl http://localhost:3000/api/users
```

### GET /api/users/:id

Returns a specific user by ID

```bash
curl http://localhost:3000/api/users/1
```

### POST /api/users

Creates a new user

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"id": 4, "title": "User 4"}'
```

## 📚 Modules Demonstrated

### HTTP Module (`server2.js`)

- Custom HTTP server implementation
- Route handling
- Middleware pattern
- JSON response handling

### File System Module (`fsDemo.js`)

- File reading and writing
- Directory operations
- File statistics
- Asynchronous file operations

### Crypto Module (`cryptoDemo.js`)

- Password hashing
- Data encryption/decryption
- Hash generation
- Random string generation

### Events Module (`eventsDemo.js`)

- Custom event emitters
- Event listeners
- Event-driven programming

### OS Module (`osDemo.js`)

- System information
- Platform details
- Memory usage
- CPU information

### Path Module (`pathDemo.js`)

- Path manipulation
- File extension handling
- Directory path operations

### Process Module (`processDemo.js`)

- Process information
- Environment variables
- Process events

### URL Module (`urlDemo.js`)

- URL parsing
- Query string handling
- URL construction

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Scripts

- `npm start`: Start the development server with nodemon
- `npm test`: Run tests (currently not implemented)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aboud** - _Initial work_

## 📝 Notes

- This project is designed for educational purposes
- No external frameworks are used - only Node.js built-in modules
- The code demonstrates best practices for vanilla Node.js development
- All examples are self-contained and can be run independently

---

**Happy Coding! 🚀**
