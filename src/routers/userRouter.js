const Express = require("express");
const UserController = require("../controller/UserController");
const userValidator = require("../validator/userValidator");
const router = Express.Router()

router.get("/usuarios", UserController.getUsers);
router.put("/usuariosUpdate",  userValidator.validateUser, UserController.editUser);

module.exports = router;