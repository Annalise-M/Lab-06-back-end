//import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const cors = require('cors');

const data = require('./data/weather.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// const express = require('express');

const app = express();

app.get('/location', (req, res) => {
    res.json({
        "formatted_query": "Seattle, WA, USA",
        "latitude": "47.606210",
        "longitude": "-122.332071"
});

app.listen(PORT, () => { console.log('listening on PORT')});