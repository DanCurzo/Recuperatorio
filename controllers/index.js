const db = require('../database/models/index');

module.exports = {
    home: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('home', {movies:movies})
        }).catch((err) => {
            console.log("Ocurrió un error");
        });
    },
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login');
    },
    newMovie: (req, res) => {
        res.render('newMovie');
    },
    detail: (req, res) => {
        db.Movie.findOne({
            where:{
                id:req.params.id,
            },
            include: [{association: 'actors'}, {association: 'genre'}],
        }).then((movie) => {
            return res.render('detail',{movie:movie});
        }).catch((err) => {
            console.log("Ocurrió un error");
        });
    }
};