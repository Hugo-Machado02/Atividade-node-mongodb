const { checkSchema } = require("express-validator");

module.exports = {
    addCasa: checkSchema({
        logradouro: {
            notEmpty: true,
            errorMessage: "Logradouro não informado!",
        },
        numero: {
            notEmpty: true,
            errorMessage: "Número da casa não informado!",
        },
        bairro: {
            notEmpty: true,
            errorMessage: "Bairro não informado!",
        },
        cidade: {
            notEmpty: true,
            errorMessage: "Cidade não informada!",
        },
        estado: {
            notEmpty: true,
            errorMessage: "Estado não informado!",
        },
        pais: {
            notEmpty: true,
            errorMessage: "País não informado!",
        },
        pais: {
            notEmpty: true,
            errorMessage: "País não informado!",
        },
        pontoReferencia: {
            notEmpty: true,
            errorMessage: "Ponto de referencia não informado!",
        },
        idProprietario: {
            notEmpty: true,
            errorMessage: "ID do proprietário não informado!",
        },
    }),
    editCasa: checkSchema({
        id: {
            notEmpty: true,
            errorMessage: "Id da Casa não especificado!",
        },
        logradouro: {
            notEmpty: false,
        },
        numero: {
            notEmpty: false,
        },
        bairro: {
            notEmpty: false,
        },
        cidade: {
            notEmpty: false,
        },
        estado: {
            notEmpty: false,
        },
        pais: {
            notEmpty: false,
        },
        pais: {
            notEmpty: false,
        },
        pontoReferencia: {
            notEmpty: false,
        },
        idProprietario: {
            notEmpty: false,
        },
  }),
    deleteCasa: checkSchema({
        id: {
            notEmpty: true,
            errorMessage: "Id da Casa não especificado!",
        },
  }),
};
