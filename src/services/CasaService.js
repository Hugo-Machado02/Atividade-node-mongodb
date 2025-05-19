const CasaRepository = require("../repositories/CasaRepository");
const UserRepository = require("../repositories/UserRepository");

class CasaService{

    async getAllCasas(){
        return await CasaRepository.getAllCasas();
    }

    async addCasa(data) {
        const validaUser = await UserRepository.validaId(data.idProprietario)
        if(!validaUser){
            return { error: "ID do usuário inválido!" };
        }
        
        const buscaUser = await UserRepository.getUserId(data.idProprietario)
        if(!buscaUser){
            return { error: "Usuário não encontrado!" };
        }

        const resOperation = await CasaRepository.addCasa(data)
        if(!resOperation){
            return {error: "Cadastro da Casa não realizado"}
        }
        return {sucess: true}
    }

    async updateCasa(data) {
        let dataUpdate = {};
        
        if(data.id){
            const validaIdCasa = await CasaRepository.validaId(data.id);
            if(!validaIdCasa){
                return { error: "ID da Casa inválido!" };
            }

            const userCheck = await CasaRepository.getCasaId(data.id)
            if (!userCheck) {
                return { error: "Casa não encontrada!" };
            }
        }

        if(data.logradouro){
            dataUpdate.logradouro = data.logradouro;
        }

        if(data.numero){
            dataUpdate.numero = data.numero
        }

        if(data.bairro){
            dataUpdate.bairro = data.bairro
        }

        if(data.cidade){
            dataUpdate.cidade = data.cidade
        }

        if(data.estado){
            dataUpdate.estado = data.estado
        }

        if(data.pais){
            dataUpdate.pais = data.pais
        }

        if(data.pontoReferencia){
            dataUpdate.pontoReferencia = data.pontoReferencia
        }

        if(data.idProprietario){
            const checkUsuario = await UserRepository.validaId(data.idProprietario);
            if(!checkUsuario){
                return {error: "ID da Casa inválido!"}
            }

            const buscaUser = await UserRepository.getUserId(data.idProprietario)
            if(!buscaUser){
                return {error: "Usuário não encontrado!"}
            }
        }
    
        const resOperation = await CasaRepository.editCasa(data.id, dataUpdate)
        if (!resOperation) {
            return { error: "Alteração da Casa não realizada!" };
        }
        return { sucess: true };
    }

    async deleteCasa(id) {
        if(id){
            const validaIdCasa = await CasaRepository.validaId(id);
            if(!validaIdCasa){
                return { error: "ID da Casa inválido!" };
            }

            const userCheck = await CasaRepository.getCasaId(id)
            if (!userCheck) {
                return { error: "Casa não encontrada!" };
            }

            const resOperation = await CasaRepository.deleteCasa(id)
            if (!resOperation) {
                return { error: "Exclusão não realizada!" };
            }
            return { sucess: true };

        }
    }

}

module.exports = new CasaService();