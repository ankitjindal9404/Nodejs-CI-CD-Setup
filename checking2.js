// server.js or index.js
// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;

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

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

module.exports = app;   // <-- critical for tests