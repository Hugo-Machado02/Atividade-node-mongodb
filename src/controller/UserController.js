const UserModel = require("../models/UserModel");
const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt")

module.exports = {

    //busca todos os usuários cadastrados
    getUsers: async (req, res) => {
        let users = await UserModel.find();
        res.json({ users });
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
        let dataAdd = {};

        if (data.name) {
            dataAdd.name = data.name;
        }
        if (data.email) {
            const emailCheck = await UserModel.findOne({ email: data.email });
            if (emailCheck) {
                res.json({ error: "Email já cadastrado" });
                return;
            }
            dataAdd.email = data.email;
        }
    
        if (data.password) {
            dataAdd.password = await bcrypt.hash(data.password, 10);
        }

        const newUser = new UserModel(dataAdd);

        const operationAdd = await newUser.save();
        //const operation = await UserModel.findByIdAndUpdate( { _id: data.id},  { $set: dataUpdates })
    
        if (!operationAdd) {
            res.json({ error: "Cadastro não realizado!" });
            return;
        }
        res.json({ sucess: true });
    },

    //Edita um usuário
    editUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.json({
            error: errors.mapped(),
        });
        return;
        }
    
        const data = matchedData(req);
        let dataUpdates = {};
    
        if (data.name) {
            dataUpdates.name = data.name;
        }
        if (data.email) {
            const emailCheck = await UserModel.findOne({ email: data.email });
            if (emailCheck) {
                res.json({ error: "Email já cadastrado" });
                return;
            }
            dataUpdates.email = data.email;
        }
        if (data.password) {
            dataUpdates.password = await bcrypt.hash(data.password, 10);
        }

        const operation = await UserModel.findByIdAndUpdate( { _id: data.id},  { $set: dataUpdates })
        if (!operation) {
            res.json({ error: "Usuário não encontrado!" });
            return;
        }
        res.json({ sucess: true });
    },

    //Exclui um usuário
    deleteUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.json({
            error: errors.mapped(),
        });
        return;
        }
    
        const data = matchedData(req);
        const operation = await UserModel.findByIdAndDelete(data.id)
        if (!operation) {
            res.json({ error: "Usuário não encontrado!" });
            return;
        }
        res.json({ sucess: true });
    },
}