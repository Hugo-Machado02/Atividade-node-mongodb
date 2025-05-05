const Express = require("express");
const UserController = require("../controller/UserController");
const router = Express.router()


router.get("/usuarios", UserController.getUsers);