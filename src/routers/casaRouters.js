const Express = require("express");
const CasaController = require("../controller/CasaConstroller");
const casaValidator = require("../validator/casaValidator");
const router = Express.Router()

router.get("/casas", CasaController.getAllCasas);
router.post("/casas/cadastro",  casaValidator.addCasa, CasaController.addCasa);
router.put("/casas/edicao",  casaValidator.editCasa, CasaController.editCasa);
router.delete("/casas/excluir",  casaValidator.deleteCasa, CasaController.deleteCasa);

module.exports = router;