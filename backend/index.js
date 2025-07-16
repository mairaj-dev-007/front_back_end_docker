const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS

app.get('/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(7000, () => {
  console.log('Backend listening on port 7000');
});

