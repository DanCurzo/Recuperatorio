const { Router } = require("express");
const router = Router();
const usersController = require('../controllers/usersController');
const moviesController = require('../controllers/moviesController');

// Ver películas
router.get("/", moviesController.home);
router.get("/movies/:id", moviesController.detail)

// Editar películas
router.get("/movies/:id/edit", moviesController.edit)
router.put("/movies/:id/edit", moviesController.editMovie)

// Crear películas
router.get("/newMovie", moviesController.newMovie);
router.post("/createNewMovie", moviesController.createNewMovie);

// Borrar película
router.delete("/movies/:id/delete", moviesController.delete)

// Usuarios
router.get("/register", usersController.register);
router.post("/registerProcess", usersController.registerProcess);
router.get("/login", usersController.login);
router.post("/loginProcess", usersController.loginProcess);

module.exports = router;