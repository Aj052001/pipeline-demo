
const express = require('express');
const app = express();

// Define a port
const port = 3005;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
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


