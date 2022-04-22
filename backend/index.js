//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');

//////////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////////
const app = express();
const PORT = process.env.PORT || 3000;

const pool = require('./db'); //Import from db.js

//////////////////////////////////////////////////////
// SETUP APP
//////////////////////////////////////////////////////
app.use(cors());

// REQUIRED TO READ POST>BODY if using "raw" > "JSON"
app.use(express.json());

// REQUIRED TO READ POST>BODY if using "x-www-form-urlencoded"
// If not req.body is empty
app.use(express.urlencoded({ extended: false }));

//////////////////////////////////////////////////////
// POST GET METHODS
// http://localhost:3000/api/
// Use Postman to test
//////////////////////////////////////////////////////
app.get('/api', async (req, res, next) => {
    console.log(req.query);

    res.json(req.query);
});

app.post('/api', async (req, res, next) => {
    console.log(req.body);

    res.json(req.body);
});

app.get('/generate4d', async (req, res, next) => {
    console.log(req.body);
    let iRandom4D = Math.floor(Math.random() * 10000);
    res.json({result: iRandom4D});
});

//////////////////////////////////////////////////////
// DISPLAY SERVER RUNNING
//////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}`);
});