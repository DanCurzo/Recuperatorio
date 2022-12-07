const { Router } = require("express");
const router = Router();
const controller = require('../controllers/index');
const moviesController = require('../controllers/moviesController');


router.get("/", moviesController.home);
router.get("/movies/:id", moviesController.detail)
router.delete("/movies/:id/delete", moviesController.delete)
router.get("/movies/:id/edit", moviesController.edit)

router.put("/movies/:id/edit", moviesController.editMovie)

router.get("/newMovie", moviesController.newMovie);
router.post("/createNewMovie", moviesController.createNewMovie);
router.get("/register", controller.register);
router.get("/login", controller.login);

module.exports = router;