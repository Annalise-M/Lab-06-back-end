//import express from 'express';
const express = require('express');

const app = express();

app.get('/location', (req, res) => {
    res.json({
        formatted_query: '',
        latitude: '',
        longitude: '',
    });
});

app.listen(PORT, () => { console.log('listening on PORT')};