const { Router } = require("express");
const router = Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const moviesMiddleware = require('../middlewares/moviesMiddleware');
const usersController = require('../controllers/usersController');
const moviesController = require('../controllers/moviesController');

// Ver películas
router.get("/", moviesController.home);
router.get("/movies/:id", moviesMiddleware, moviesController.detail);

// Editar películas
router.get("/movies/:id/edit", moviesMiddleware, moviesController.edit);
router.put("/movies/:id/edit", moviesController.editMovie);

// Crear películas
router.get("/newMovie", moviesMiddleware, moviesController.newMovie);
router.post("/createNewMovie", moviesController.createNewMovie);

// Borrar película
router.delete("/movies/:id/delete", moviesMiddleware, moviesController.delete);

// Usuarios
router.get("/register", guestMiddleware, usersController.register);
router.post("/registerProcess", usersController.registerProcess);
router.get("/login", guestMiddleware, usersController.login);
router.post("/loginProcess", usersController.loginProcess);

module.exports = router;