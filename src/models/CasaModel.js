const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const modelName = "casas"

const schemaModel = new mongoose.Schema ({
    logradouro: String,
    numero: String,
    bairro: String,
    cidade: String,
    estado: String,
    pais: String,
    pontoReferencia: String,
    idProprietario: String,
}, { versionKey: false });

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else{
    module.exports = mongoose.model(modelName, schemaModel)
}