const express = require('express');
const cors = require('cors');
const db = require('../database');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function(q, s, x) {
  s.json({ status: 'ok' });
});

app.post('/api/accounts', function(q, s, x) {
  const data = q.body;
  db.authenticate(data)
    .then(response => {
      if ('token' in response) {
        return s.json({ token: response.token });
      }
      s.status(401).json({ message: 'invalid credentials' });
    })
    .catch(err => s.status(500).json({ message: 'internal server error' }));
});

app.get('/api/courses', function(q, s, x) {
  db.fetchAll('courses').then(rows => s.json(rows));
});

app.get('/api/units', function(q, s, x) {
  const { course_id } = q.query;
  const promise = db.fetchAll('units');
  if (course_id) {
    promise.where({ course_id }).then(rows => s.json(rows));
  } else {
    promise.then(rows => s.json(rows));
  }
});

app.get('/api/students', function(q, s, x) {
  db.fetchAll('students').then(rows => s.json(rows));
});

app.get('/api/students/:student_id', function(q, s, x) {
  const { student_id } = q.params;
  db.fetchAll('students')
    .where({ student_id })
    .then(rows => s.json(rows));
});

app.get('/api/attendance', function(q, s, x) {
  const { student_id } = q.query;
  const promise = db.fetchAll('attendance');
  if (student_id) {
    promise.where({ student_id }).then(rows => s.json(rows));
  } else {
    promise.then(rows => s.json(rows));
  }
});

app.listen(PORT, function() {
  console.log('Listening on', PORT);
});
