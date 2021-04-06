const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
