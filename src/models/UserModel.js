const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const modelName = "users"

const schemaModel = new mongoose.Schema ({
    nome: String,
    email: String,
    senha: String,
});