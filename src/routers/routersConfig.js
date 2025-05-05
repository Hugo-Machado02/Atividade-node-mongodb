const Express = require("express");
const router = Express.Routerouter();

router.get("/service-test", (req, res) => {
    res.json({ return: "Rotas funcionando" })
})