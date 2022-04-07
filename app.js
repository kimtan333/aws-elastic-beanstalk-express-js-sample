const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Test!'));
=======
app.get('/', (req, res) => res.send('Hello world!'));
>>>>>>> ad0ab871745aaef7c7c9b9c5531453768c391581

app.listen(port);
console.log(`App running on http://localhost:${port}`);
