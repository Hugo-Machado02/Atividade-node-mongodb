const Express = require("express");
const router = Express.Router();

router.get("/service-test", (req, res) => {
    res.json({ return: "Rotas funcionando" })
})

module.exports = router;