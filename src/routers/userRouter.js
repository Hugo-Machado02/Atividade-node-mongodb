const Express = require("express");
const UserController = require("../controller/UserController");
const userValidator = require("../validator/userValidator");
const router = Express.Router()

router.get("/usuarios", UserController.getUsers);
router.post("/usuarios/cadastro",  userValidator.addUser, UserController.addUser);
router.put("/usuarios/edicao",  userValidator.editUser, UserController.editUser);

module.exports = router;