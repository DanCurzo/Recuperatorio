const db = require('../database/models/index');
const moment = require('moment')

module.exports = {
    // Listado de peliculas
    home: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('home', {movies:movies})
        }).catch((err) => {
            console.log("Ocurrió un error");
        });
    },
    // Detalle de pelicula
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
    },
    // Pelicula nueva
    newMovie: (req, res) => {
        db.Genre.findAll().then((genres) => res.render('newMovie', {genres: genres})).catch((err) => console.log(err))
    },
    // Crear película
    createNewMovie: (req, res)=> {
        db.Movie.create({
            title: req.body.title,
            rating: parseFloat(req.body.rating),
            awards: parseInt(req.body.awards),
            length: parseInt(req.body.length),
            genre_id: parseInt(req.body.genre),
            release_date: req.body.release_date
        }).then(() => {
            res.redirect('/')
        }).catch(err => {
            console.log(err)
        });
    },
    // Editar película
    edit:(req,res)=>{
        db.Genre.findAll().then((genres) =>
            db.Movie.findOne({
                where:{
                    id:req.params.id
                },
            }).then((movie) => {
                    return res.render('editMovie', {movie, moment, genres});
            }).catch((err) => {
                console.log(err)
            })
        ).catch(err => console.log(err))
        
    },
    editMovie:(req,res)=>{
         db.Movie.update({
            title: req.body.title,
            rating: parseFloat(req.body.rating),
            awards: parseInt(req.body.awards),
            length: parseInt(req.body.length),
            genre_id: parseInt(req.body.genre),
            release_date: req.body.release_date
        }, 
        {
            where:{id: req.params.id}
        })
        res.redirect('/')
    },
    delete:(req,res)=>{
        db.Movie.destroy({
            where: {id:req.params.id}
        });
        res.redirect('/')
    },
};