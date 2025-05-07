const UserModel = require("../models/UserModel");

module.exports = {
    getUsers: async (req, res) => {
        let users = await UserModel.find();
        res.json({ users });
    },
    editUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.json({
            error: errors.mapped(),
        });
        return;
        }
    
        const data = matchedData(req);
        let updates = {};
    
        if (data.name) {
            updates.name = data.name;
        }
        if (data.email) {
            const emailCheck = await User.findOne({ email: data.email });
            if (emailCheck) {
                res.json({ error: "Email já cadastrado" });
                return;
            }
            updates.email = data.email;
        }
        if (data.state) {
            if (mongoose.Types.ObjectId.isValid(data.state)) {
                const stateCheck = await States.findById(data.state);
                if (!stateCheck) {
                res.json({ error: "Estado não Cadastrado" });
                return;
                }
                updates.state = data.state;
            } else {
                res.json({ error: "Código do estado fora do padrão" });
                return;
            }
        }
    
        if (data.passwordHash) {
            updates.passwordHash = await bcrypt.hash(data.passwordHash, 10);
        }
    
        const opValid = await User.findOneAndUpdate(
            { token: data.token },
            { $set: updates }
        );
        if (!opValid) {
            res.json({ error: "Token não encontrado!" });
            return;
        }
        res.json({ sucess: true });
    },
}