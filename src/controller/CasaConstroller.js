const CasaService = require("../services/CasaService");
const { validationResult, matchedData } = require("express-validator");


module.exports = {
    //busca todas as casas cadastradas
    getAllCasas: async (req, res) => {
        const casas = await CasaService.getAllCasas();
        if (casas) {
            return res.status(200).json({ casas });
        } else {
            return res.status(500).json("Casas não encontradas");
        }
    },

    //Adiciona uma nova Casa
    addCasa: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({
                error: errors.mapped(),
            });
            return;
        }
    
        const data = matchedData(req);
        
        const newCasa = await CasaService.addCasa(data)
        if (newCasa.sucess) {
            res.status(200).json({ newCasa });
        }
        else{
            res.status(500).json({ newCasa });
        }
    },

    //Edita um usuário
    editCasa: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({
                error: errors.mapped(),
            });
            return;
        }
    
        const data = matchedData(req);
        
        const editCasa = await CasaService.updateCasa(data)
        if (editCasa.sucess) {
            res.status(200).json({ editCasa });
        }
        else{
            res.status(500).json({ editCasa });
        }
    },

    //Exclui um usuário
    deleteCasa: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ error: errors.mapped() });
            return;
        }
    
        const { id } = matchedData(req);

        const deleteCasa = await CasaService.deleteCasa(id);
        if (deleteCasa.sucess) {
            return res.status(200).json({ deleteCasa });
        }
        else{
            return res.status(500).json({ deleteCasa });
        }
    },
}