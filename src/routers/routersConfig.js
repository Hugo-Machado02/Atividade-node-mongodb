const Express = require("express");
const router = Express.router();

router.get("/service-test", (req, res) => {
    res.json({ return: "Rotas funcionando" })
})