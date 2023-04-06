const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World Dheeraj');
});

app.get('/dheeraj', (req, res) => {
    res.send('Hello World Dheeraj');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});