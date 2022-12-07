function moviesMiddleware(req, res, next) {
    // Si NO hay un usuario logueado
    if (!req.session.userLogged) {
        return res.redirect('/');
    }
    // Si hay un usuario logueado, el proceso sigue
    next();
}

module.exports = moviesMiddleware;