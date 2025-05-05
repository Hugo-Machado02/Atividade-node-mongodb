const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const modelName = "users"

const schemaModel = new mongoose.Schema ({
    name: String,
    email: String,
    password: String,
});

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else{
    module.exports = mongoose.model(modelName, schemaModel)
}