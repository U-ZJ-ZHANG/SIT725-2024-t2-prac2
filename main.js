const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Get the sum of 2 number');
});

app.get('/add', (req, res) => {
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);
    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = num1 + num2;
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        res.send('Invalid numbers provided. Please provide valid num1 and num2');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});