const { Router } = require("express");
const router = Router();
const controller = require('../controllers/index');


router.get("/", controller.home);
router.get("/register", controller.register);
router.get("/login", controller.login);
router.get("/newMovie", controller.newMovie);

module.exports = router;