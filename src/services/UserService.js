const UserRepository = require("../repositories/UserRepository");
const UserModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

class UserService {

    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    async addUser(data){
        const emailCheck = await UserRepository.getUserEmail(data.email)
        if (emailCheck) {
            return { error: "Email já cadastrado" };
        }
    
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        const newUser = new UserModel(data);

        const resOperation = await newUser.save();
    
        if (!resOperation) {
            return { sucess: false, error: "Cadastro não realizado!" };
        }
        return { sucess: true };
    }
    
    async updateUser(data){
        let dataUpdate = {};

        if(data.id){
            const validaIdUser = await UserRepository.validaId(data.id)
            if(!validaIdUser){
                return { error: "ID do usuário inválido!" };
            }

            const userCheck = await UserRepository.getUserId(data.id)
            if (!userCheck) {
                return { error: "Usuário não encontrado!" };
            }
        }
 
        if(data.name){
            dataUpdate.name = data.name;
        }

        if(data.email){
            const emailCheck = await UserRepository.getUserEmail(data.email)
            if (emailCheck) {
                return { error: "Email já cadastrado" };
            }
            dataUpdate.email = data.email;
        }
    
        if(data.password){
            dataUpdate.password = await bcrypt.hash(data.password, 10)
        }

        const resOperation = await UserRepository.editUser(data.id, dataUpdate);
    
        if (!resOperation) {
            return { error: "Alteração não realizado!" };
        }
        return { sucess: true };
    }

    async deleteUser(id){
        if(id){
            const validaIdUser = await UserRepository.validaId(id)
            if(!validaIdUser){
                return { error: "ID do usuário inválido!" };
            }

            const userCheck = await UserRepository.getUserId(id)
            if (!userCheck) {
                return { error: "Usuário não encontrado!" };
            }
        }

        const resOperation = await UserRepository.deleteUser(id);
    
        if (!resOperation) {
            return { error: "Exclusão não realizado!" };
        }
        return { sucess: true };
    }
}

module.exports = new UserService();