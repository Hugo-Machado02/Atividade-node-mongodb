const Express = require("express");
const router = Express.Router();
const userRouters = require("./userRouter");
const casaRouters = require("./casaRouters");

router.get("/service-test", (req, res) => {
    res.json({ return: "Rotas funcionando" })
})

router.use("/", userRouters);
router.use("/", casaRouters);

module.exports = router;