// Import required modules
const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware for CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define a route that returns "Hello, World!"
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Set up the server to listen on port 9000
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
