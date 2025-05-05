const UserModel = require("../models/UserModel");

module.exports = {
    getUsers: async (req, res) => {
        let users = await UserModel.find();
        res.json({ users });
    }
}