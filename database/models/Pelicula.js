const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Pelicula = sequelize.define('Peliculas',{
    title: Sequelize.STRING,
    rating: Sequelize.STRING,
    awards: Sequelize.STRING,
    length: Sequelize.INTEGER,
    release_date: Sequelize.DATE,
});

module.exports = Usuario;

