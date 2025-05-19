const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/UserService");
const { validationResult, matchedData } = require("express-validator");


module.exports = {
    //busca todos os usuários cadastrados
    getAllUsers: async (req, res) => {
        const users = await UserService.getAllUsers();
        if (users) {
            return res.status(200).json({ users });
        } else {
            return res.status(500).json("Usuários não encontrados");
        }
    },

    //Adiciona um novo usuário
    addUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({
                error: errors.mapped(),
            });
            return;
        }
    
        const data = matchedData(req);

        const newUser = await UserService.addUser(data);
        if (newUser.sucess) {
            res.status(200).json({ newUser });
        }
        else{
            res.status(500).json({newUser});
        }
    },

    //Edita um usuário
    editUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ error: errors.mapped() });
            return;
        }

        const data = matchedData(req);
    
        const editUser = await UserService.updateUser(data)
        if (editUser.sucess) {
            return res.status(200).json({ editUser });
        }
        else{
            return res.status(500).json({ editUser });
        }
    },

    //Exclui um usuário
    deleteUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ error: errors.mapped() });
            return;
        }
    
        const { id } = matchedData(req);

        const deleteUser = await UserService.deleteUser(id);
        if (deleteUser.sucess) {
            return res.status(200).json({ deleteUser });
        }
        else{
            return res.status(500).json({ deleteUser });
        }
    },
}