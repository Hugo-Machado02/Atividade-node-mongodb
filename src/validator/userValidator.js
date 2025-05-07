const { checkSchema } = require("express-validator");

module.exports = {
    addUser: checkSchema({
        name: {
            notEmpty: true,
            isLength: {
                options: { min: 3 },
            },
            errorMessage: "O mínimo para os nomes são de 3 caracteres",
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "email digitado invalido",
        },
        password: {
            isLength: {
                options: { min: 10 },
            },
            errorMessage: "A senha deve ter no mínimo 10 caracteres",
        },
    }),
    editUser: checkSchema({
        id: {
            notEmpty: true,
            errorMessage: "O ID não pode ser vazio",
        },
        name: {
            notEmpty: true,
            isLength: {
                options: { min: 3 },
            },
            errorMessage: "O mínimo para os nomes são de 3 caracteres",
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "email digitado invalido",
        },
        password: {
            isLength: {
                options: { min: 10 },
            },
            errorMessage: "A senha deve ter no mínimo 10 caracteres",
        },
  }),
    deleteUser: checkSchema({
        id: {
            notEmpty: true,
            errorMessage: "O ID não pode ser vazio",
        },
  }),
};
