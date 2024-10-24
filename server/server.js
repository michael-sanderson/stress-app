const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app in /public
app.use(express.static(path.join(__dirname, '../build')));

// All other requests return the React app (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
