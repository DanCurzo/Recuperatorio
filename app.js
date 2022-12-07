const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');

require('dotenv').config();

// Server
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});

const {join} = require('path');
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

// EJS
app.set('views', join(__dirname,'views'));
app.set('view engine', 'ejs');

// Sesión
app.use(session({
    secret: "It's a secret",
    resave: false,
    saveUninitialized: false
}));

// Rutas
app.use(require('./routes/index.js'));