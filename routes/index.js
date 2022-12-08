const { Router } = require("express");
const router = Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const usersController = require('../controllers/usersController');
const moviesController = require('../controllers/moviesController');

// Ver películas
router.get("/", moviesController.home);
router.get("/movies/:id", authMiddleware, moviesController.detail);

// Editar películas
router.get("/movies/:id/edit", authMiddleware, moviesController.edit);
router.put("/movies/:id/edit", moviesController.editMovie);

// Crear películas
router.get("/newMovie", authMiddleware, moviesController.newMovie);
router.post("/createNewMovie", moviesController.createNewMovie);

// Borrar película
router.delete("/movies/:id/delete", authMiddleware, moviesController.delete);

// Usuarios
router.get("/register", guestMiddleware, usersController.register);
router.post("/registerProcess", usersController.registerProcess);
router.get("/login", guestMiddleware, usersController.login);
router.post("/loginProcess", usersController.loginProcess);
router.get("/logout", authMiddleware, usersController.logout);

module.exports = router;