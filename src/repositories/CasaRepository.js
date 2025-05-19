const CasaModel = require("../models/CasaModel");
const mongoose = require("mongoose");

class CasaRepository {
    async getAllCasas() {
        return await CasaModel.find();
    }

    async getCasaId(id) {
        return await CasaModel.findById(id);
    }

    async addCasa(data) {
        const newCasa = new CasaModel(data);
        return await newCasa.save();
    }

    async editCasa(id, update){
        return await CasaModel.findByIdAndUpdate({ _id: id }, { $set: update })
    }

    async deleteCasa(id){
        return await CasaModel.findByIdAndDelete(id)
    }

    async idUserValid(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}

module.exports = new CasaRepository();