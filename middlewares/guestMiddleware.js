function guestMiddleware(req, res, next) {
    // Si hay un usuario logueado
    if (req.session.userLogged) {
        console.log(req.session.userLogged);
        return res.redirect('/');
    }
    // Si no hay un usuario logueado, el proceso sigue
    next();
}

module.exports = guestMiddleware;