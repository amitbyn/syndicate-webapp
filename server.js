const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the landing page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
