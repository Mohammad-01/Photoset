const express = require('express');
const fs = require('fs');
const app = express();
const { exec } = require('child_process');
const path = require('path');

app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));

app.post('/upload', (req, res) => {
  const base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/, "");
  fs.writeFileSync('face.jpg', base64Data, 'base64');
  exec('node send.js');
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
