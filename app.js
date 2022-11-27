const express = require('express');
require('dotenv').config();

// Server
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});

const {join} = require('path');

// EJS
app.set('views', join(__dirname,'views'));
app.set('view engine', 'ejs');

// Rutas
app.use(require('./routes/index.js'));