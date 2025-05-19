const UserModel = require("../models/UserModel");
const mongoose = require("mongoose");

class UserRepository {
    async getAllUsers() {
        return await UserModel.find();
    }

    async getUserId(id) {
        return await UserModel.findById(id);
    }

    async getUserEmail(email) {
        return await UserModel.findOne({ email: email })
    }

    async addUser(data) {
        const newUser = new UserModel(data);
        return await newUser.save();
    }

    async editUser(id, update){
        return await UserModel.findByIdAndUpdate({ _id: id }, { $set: update })
    }

    async deleteUser(id){
        return await UserModel.findByIdAndDelete(id)
    }

    async validaId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}

module.exports = new UserRepository();