const Express = require("express");
const router = Express.Router();
const userRouters = require("./userRouter");

router.get("/service-test", (req, res) => {
    res.json({ return: "Rotas funcionando" })
})

router.use("/", userRouters);

module.exports = router;