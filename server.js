const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', function(q, s, x) {
  s.json({ status: 'ok' });
});

app.listen(PORT, function() {
  console.log('Listening on', PORT);
});
