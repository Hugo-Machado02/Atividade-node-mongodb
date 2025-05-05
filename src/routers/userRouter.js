const Express = require("express");
const UserController = require("../controller/UserController");
const router = Express.Router()


router.get("/usuarios", UserController.getUsers);