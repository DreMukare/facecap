const express = require('express');
const dal = require('./data-access-layer');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', function(q, s, x) {
  s.json({ status: 'ok' });
});

app.post('/api/accounts', function(q, s, x) {
  const data = q.body;
  dal.authenticate(data, function(err, valid) {
    if (err) {
      s.status(500).json({ message: 'internal server error' });
      return x();
    }
    if (valid) {
      s.json({ token: '' });
      return x();
    }
    s.status(401).json({ message: 'invalid credentials' });
  });
});

app.listen(PORT, function() {
  console.log('Listening on', PORT);
});
