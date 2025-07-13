// server.js or index.js
const express = require('express');
const app = express();

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// /about route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Only start the server if this file is run directly
// if (require.main === module)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;   // <-- critical for tests