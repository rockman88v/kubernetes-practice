// app.js
const express = require('express');
const js2xmlparser = require('js2xmlparser');
const MongoClient = require('mongodb').MongoClient;
const kafka = require('kafka-node');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
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

