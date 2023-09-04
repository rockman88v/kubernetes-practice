const express = require('express');
const js2xmlparser = require('js2xmlparser');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const response = {
    message: 'Hello, World!',
  };

  // Check if the client accepts XML response
  if (req.accepts('xml')) {
    const xmlResponse = js2xmlparser.parse('response', response);
    res.set('Content-Type', 'application/xml');
    res.send(xmlResponse);
  } else {
    // Default to JSON response
    res.json(response);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

