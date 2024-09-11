
const express = require('express');
const app = express();

// Define a port
const port = 3006;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/login', (req, res) => {
    res.send('Please login into the website');
});

app.get('/admin', (req, res) => {
    res.send('welcome to the world');
});

app.get('/register', (req, res) => {
    res.send('please do register');
});



// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Close the server after 1 minute (60000 milliseconds)
// setTimeout(() => {
//     server.close(() => {
//         console.log('Server closed after 1 minute');
//     });
// }, 60000);


